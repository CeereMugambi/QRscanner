import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { MaterialModule } from '../material/material.module';
import { DocumentScannerComponent } from './document-scanner/document-scanner.component';



@NgModule({
  declarations: [
    CardComponent,
    SubnavbarComponent,
    DocumentScannerComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ],
  exports:[
    CardComponent,
    SubnavbarComponent
  ]
})
export class ComponentsModule { }
