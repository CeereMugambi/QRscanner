import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const HomeModule = () => import('./home/home.module').then(x => x.HomeModule);
const DocumentScannerModule = () => import('./document-scanner/document-scanner.module').then(x => x.DocumentScannerModule);


const routes: Routes = [
  {path:'home',loadChildren:HomeModule,},
  {path:'scanner',loadChildren:DocumentScannerModule,},

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'Welcome' },
  { path: 'subnavbar', redirectTo: './', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
