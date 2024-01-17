import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const HomeModule = () => import('./home/home.module').then(x => x.HomeModule);


const routes: Routes = [
  {path:'home',loadChildren:HomeModule,},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'Welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
