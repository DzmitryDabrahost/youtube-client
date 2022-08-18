import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ErrorComponent from './core/pages/error/error.component';
import HeaderComponent from './core/components/header/header.component';
import AuthComponent from './auth/pages/auth/auth.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
