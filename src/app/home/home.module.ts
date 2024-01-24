import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { GeneratorComponent } from './generator/generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ScannerComponent } from './scanner/scanner.component';
import { WebCaptureComponent } from './web-capture/web-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { DocumentScannerModule } from '../document-scanner/document-scanner.module';
import { SelectpageComponent } from './selectpage/selectpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeneratorComponent,
    ScannerComponent,
    WebCaptureComponent,
    SelectpageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule,
    QRCodeModule,
    WebcamModule,
    DocumentScannerModule

  ]
})
export class HomeModule { }
