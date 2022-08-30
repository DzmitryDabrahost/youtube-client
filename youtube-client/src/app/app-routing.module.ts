import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ErrorComponent from './core/pages/error/error.component';
import AuthComponent from './auth/pages/auth/auth.component';
import CardDetailsComponent from './youtube/components/cardDetails/cardDetails.component';
import SearchResultComponent from './core/components/search/searchResult/searchResult.component';
import LoginguardGuard from './auth/guards/loginguard.guard';
import MainpageComponent from './youtube/components/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent, canActivate: [LoginguardGuard] },
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
