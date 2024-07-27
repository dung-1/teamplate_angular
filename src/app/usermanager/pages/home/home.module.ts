import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { ProductModule } from '../product/product.module';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    CommonModule,
    ContactModule,
    AboutModule,
    ProductModule,
    ServiceModule

  ],
  exports: [HomeComponent],
})
export class HomeAppModule {}