import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { DocumentScannerModule } from '../document-scanner/document-scanner.module';
import { SelectpageComponent } from './selectpage/selectpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectpageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule,
    DocumentScannerModule

  ]
})
export class HomeModule { }
