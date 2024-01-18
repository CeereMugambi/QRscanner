import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { GeneratorComponent } from './generator/generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ScannerComponent } from './scanner/scanner.component';





@NgModule({
  declarations: [
    GeneratorComponent,
    ScannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule,
    QRCodeModule

  ]
})
export class HomeModule { }
