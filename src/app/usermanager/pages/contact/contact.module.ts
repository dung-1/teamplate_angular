import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    FormsModule,
    CommonModule,

  ],
  exports: [ContactComponent],
})
export class ContactModule {}