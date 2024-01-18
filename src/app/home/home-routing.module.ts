import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { ScannerComponent } from './scanner/scanner.component';



const routes: Routes = [
    {path: 'generator',component:GeneratorComponent},
    {path: 'scanner',component:ScannerComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
