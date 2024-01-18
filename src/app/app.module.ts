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
    QRCodeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
