import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules Imported
import { MatMenuModule,
         MatTableModule,
         MatButtonModule,
         MatIconModule,
         MatToolbarModule,
         MatProgressSpinnerModule,
         MatPaginatorModule, 
         MatSortModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatTabsModule,
         MatGridListModule,
         MatDialogModule,
         MatListModule,
         MatSliderModule,
         MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule, 
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatSliderModule,
    MatRadioModule
  ],
  exports: [
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    MatSliderModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
