import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/authguard.service';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutModule } from './admin/pages/main-layout/main-layout.module';
import { AppLayoutModule } from './usermanager/pages/app-layout/app-layout.module';
import { AppLayoutComponent } from './usermanager/pages/app-layout/app-layout.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/pages/main-layout/main-layout.module').then(m => m.MainLayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AppLayoutComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    MainLayoutModule,
    AppLayoutModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
