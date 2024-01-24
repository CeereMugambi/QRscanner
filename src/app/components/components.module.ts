import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardHeaderComponent } from './card-header/card-header.component';



@NgModule({
  declarations: [
    CardComponent,
    SubnavbarComponent,
    ToolbarComponent,
    CardHeaderComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ],
  exports:[
    CardComponent,
    SubnavbarComponent,
    ToolbarComponent,
    CardHeaderComponent
  ]
})
export class ComponentsModule { }
