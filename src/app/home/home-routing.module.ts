import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectpageComponent } from './selectpage/selectpage.component';



const routes: Routes = [
    {path:'select-page',component:SelectpageComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
