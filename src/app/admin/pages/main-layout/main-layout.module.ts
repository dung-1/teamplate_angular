import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppAdminSharedModule } from '../../shared/app-admin.share.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductManagementModule } from '../product-management/product-management.module';
import { CategoryManagementModule } from '../category-management/category-management.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MainLayoutRoutingModule,
    AppAdminSharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CategoryManagementModule,
    ProductManagementModule
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
