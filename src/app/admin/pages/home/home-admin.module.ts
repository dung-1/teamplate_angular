import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],

  imports: [
    CommonModule, // Add CommonModule here
    HttpClientModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class HomeAdminModule { }
