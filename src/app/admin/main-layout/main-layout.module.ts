import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppAdminSharedModule } from '../shared/app-admin.share.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MainLayoutRoutingModule,
    AppAdminSharedModule,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {
//   constructor() {
//     this.loadAdminScriptsAndStyles();
//   }

//   private loadAdminScriptsAndStyles() {
//     const styles = [
//       'assets/admin/vendor/bootstrap/css/bootstrap.min.css',
//       'assets/admin/vendor/bootstrap/css/bootstrap.min.css',
//       'assets/admin/vendor/bootstrap-icons/bootstrap-icons.css',
//       'assets/admin/vendor/boxicons/css/boxicons.min.css',
//       'assets/admin/vendor/quill/quill.snow.css',
//       'assets/admin/vendor/quill/quill.bubble.css',
//       'assets/admin/vendor/remixicon/remixicon.css',
//       'assets/admin/vendor/simple-datatables/style.css',
//       'assets/admin/css/style.css',
//     ];

//     const scripts = [
//       'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
//       'assets/vendor/apexcharts/apexcharts.min.js',
//       'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
//       'assets/vendor/chart.js/chart.umd.js',
//       'assets/vendor/echarts/echarts.min.js',
//       'assets/vendor/quill/quill.min.js',
//       'assets/vendor/simple-datatables/simple-datatables.js',
//       'assets/vendor/tinymce/tinymce.min.js',
//       'assets/vendor/php-email-form/validate.js',
//       'assets/vendor/js/main.js',
//     ];

//     styles.forEach((style) => {
//       const link = document.createElement('link');
//       link.href = style;
//       link.rel = 'stylesheet';
//       document.head.appendChild(link);
//     });

//     scripts.forEach((script) => {
//       const scriptElement = document.createElement('script');
//       scriptElement.src = script;
//       document.body.appendChild(scriptElement);
//     });
//   }
}
