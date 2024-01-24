import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { ButtonComponent } from './button/button.component';
import { ScandocsCardComponent } from './scandocs-card/scandocs-card.component';



@NgModule({
  declarations: [
    CardComponent,
    SubnavbarComponent,
    ToolbarComponent,
    CardHeaderComponent,
    ButtonComponent,
    ScandocsCardComponent,
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
    CardHeaderComponent,
    ButtonComponent,
    ScandocsCardComponent
  ]
})
export class ComponentsModule { }
