import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule,MatTableModule,MatButtonModule,MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
