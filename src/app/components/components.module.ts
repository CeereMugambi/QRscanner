import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    CardComponent,
    SubnavbarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ],
  exports:[
    CardComponent,
    SubnavbarComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
