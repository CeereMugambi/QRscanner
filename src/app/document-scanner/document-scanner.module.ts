import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentScannerRoutingModule } from './document-scanner-routing.module';
import { ScannerComponent } from './scanner/scanner.component';
import { ScanDialogComponent } from './scan-dialog/scan-dialog.component';


@NgModule({
  declarations: [
    ScannerComponent,
    ScanDialogComponent
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
