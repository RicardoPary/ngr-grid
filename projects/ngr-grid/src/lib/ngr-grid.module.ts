// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// ANGULAR-MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
// AG-GRID
import {AgGridModule} from 'ag-grid-angular';
// COMPONENTS
import {NgrGridComponent} from './ngr-grid.component';
import {ActionButtonComponent} from './components/action-button.component';
import {ActionsButtonPatientComponent} from './components/actions-button-patient.component';

export const agGridModule = AgGridModule.withComponents([
  ActionButtonComponent,
  ActionsButtonPatientComponent
]);

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    agGridModule
  ],
  declarations: [
    NgrGridComponent,
    ActionButtonComponent,
    ActionsButtonPatientComponent
  ],
  exports: [
    NgrGridComponent
  ]
})

export class NgrGridModule {
}
