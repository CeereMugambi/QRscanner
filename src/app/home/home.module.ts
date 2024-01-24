import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { GeneratorComponent } from './generator/generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ScannerComponent } from '../document-scanner/scanner/scanner.component';
import { WebCaptureComponent } from '../document-scanner/web-capture/web-capture.component';
import { WebcamModule } from 'ngx-webcam';
import { DocumentScannerModule } from '../document-scanner/document-scanner.module';
import { SelectpageComponent } from './selectpage/selectpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeneratorComponent,
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
