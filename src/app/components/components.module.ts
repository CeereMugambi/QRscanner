import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';



@NgModule({
  declarations: [
    CardComponent,
    SubnavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    CardComponent
  ]
})
export class ComponentsModule { }
