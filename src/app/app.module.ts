import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './home/home.module';
import { QRCodeModule } from 'angularx-qrcode';
import { WebcamModule } from 'ngx-webcam';
import { DocumentScannerModule } from './document-scanner/document-scanner.module';
import { ImageService } from './services';
import { QrScannerModule } from './qrScanner/qr-scanner.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    HomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    WelcomeRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    WebcamModule,
    DocumentScannerModule,
    QrScannerModule
    
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
