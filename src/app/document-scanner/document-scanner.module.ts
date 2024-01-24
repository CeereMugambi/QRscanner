import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentScannerRoutingModule } from './document-scanner-routing.module';
import { ScannerComponent } from './scanner/scanner.component';
import { ScanDialogComponent } from './scan-dialog/scan-dialog.component';
import { WebCaptureComponent } from './web-capture/web-capture.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    ScannerComponent,
    ScanDialogComponent,
    WebCaptureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocumentScannerRoutingModule,
    ComponentsModule,
    MaterialModule,
    WebcamModule,
    

  ],
  exports:[
    ScannerComponent,
    ScanDialogComponent,
    WebCaptureComponent
  ]
})
export class DocumentScannerModule{ }
