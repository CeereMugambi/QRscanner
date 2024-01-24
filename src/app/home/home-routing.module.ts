import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { SelectpageComponent } from './selectpage/selectpage.component';



const routes: Routes = [
    {path: 'generator',component:GeneratorComponent},
    {path:'select-page',component:SelectpageComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
