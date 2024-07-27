import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service.component';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    FormsModule,
    CommonModule,

  ],
  exports: [ServiceComponent],
})
export class ServiceModule {}