import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ErrorComponent from './core/pages/error/error.component';
import HeaderComponent from './core/components/header/header.component';
import AuthComponent from './auth/pages/auth/auth.component';
import CardDetailsComponent from './youtube/components/card-details/card-details.component';
import SearchResultComponent from './core/components/search/search-result/search-result.component';
import LoginguardGuard from './auth/guards/loginguard.guard';

const routes: Routes = [
  { path: '', component: HeaderComponent, canActivate: [LoginguardGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'search/:search', component: SearchResultComponent },
  { path: 'detail/:id', component: CardDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
