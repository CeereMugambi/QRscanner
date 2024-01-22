import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentScannerRoutingModule } from './document-scanner-routing.module';
import { ScannerComponent } from './scanner/scanner.component';


@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    DocumentScannerRoutingModule
  ],
  exports:[
    ScannerComponent
  ]
})
export class DocumentScannerModule { }
