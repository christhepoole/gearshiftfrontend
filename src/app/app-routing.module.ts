import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }, 
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule) }, 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'rentals', loadChildren: () => import('./modules/rentals/rentals.module').then(m => m.RentalsModule) },
  { path: 'postrental', loadChildren: () => import('./modules/postrental/postrental.module').then(m => m.PostrentalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
