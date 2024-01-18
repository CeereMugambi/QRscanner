import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GeneratorComponent } from './generator/generator.component';



const routes: Routes = [
    {path: 'home',component:HomepageComponent},
    {path: 'generator',component:GeneratorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
