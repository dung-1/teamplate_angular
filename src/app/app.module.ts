import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { authInterceptor } from '../service/auth/AuthInterceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,RouterModule,
    CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [         
     provideHttpClient(withInterceptors([authInterceptor])),


    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_LOCALE },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
