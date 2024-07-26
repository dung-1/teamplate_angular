import { ProductModule } from './../product/product.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { SharedModule } from '../../shared/app.shared.module';
import { HomeAppModule } from '../home/home.module';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppLayoutRoutingModule,
    SharedModule,
    HomeAppModule,
    ContactModule,
    AboutModule,
    ProductModule,
    ServiceModule
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
