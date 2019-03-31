import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule 
  ]
})

export class MaterialModule { }
