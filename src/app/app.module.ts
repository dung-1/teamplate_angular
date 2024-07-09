import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { SharedModule } from './user/shared/app.shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/pages/home/home.component';
import { AboutComponent } from './user/pages/about/about.component';
import { ServiceComponent } from './user/pages/service/service.component';
import { ProductComponent } from './user/pages/product/product.component';
import { ContactComponent } from './user/pages/contact/contact.component';
import { ProductDetailComponent } from './user/pages/product/product-detail/product-detail.component';
import { BlogComponent } from './user/pages/blog/blog.component';
import { BlogDetailComponent } from './user/pages/blog/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailComponent,
    BlogComponent,
    BlogDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule,RouterModule,
    CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
