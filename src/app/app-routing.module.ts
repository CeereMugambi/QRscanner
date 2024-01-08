import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AccountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
  {path:'account',loadChildren:AccountModule},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'Welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
