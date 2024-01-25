import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerRoutingModule } from './qrScanner-routing.module';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ScannerComponent } from './scanner/scanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';



@NgModule({
  declarations: [
    GeneratorComponent,
    ScannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ComponentsModule,
    QRCodeModule,
    QrScannerRoutingModule,
    NgxScannerQrcodeModule
  ]
})
export class QrScannerModule { }
