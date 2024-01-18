import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { GeneratorComponent } from './generator/generator.component';



@NgModule({
  declarations: [
    HomepageComponent,
    GeneratorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class HomeModule { }
