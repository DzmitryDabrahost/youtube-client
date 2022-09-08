import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import SearchItemComponent from './core/components/search/searchItem/searchItem.component';
import SearchResultComponent from './core/components/search/searchResult/searchResult.component';
import SearchInputComponent from './core/components/search/searchInput/searchInput.component';
import SearchSettingsComponent from './core/components/search/searchSettings/searchSettings.component';
import LogoComponent from './core/components/header/logo/logo.component';
import LoginComponent from './core/components/header/login/login.component';
import FilterwordPipe from './shared/CustomPipes/filterword.pipe';
import SortingvideoPipe from './shared/CustomPipes/sortingvideo.pipe';
import MyColorDirective from './shared/Directives/myColor.directive';
import ErrorComponent from './core/pages/error/error.component';
import AuthComponent from './auth/pages/auth/auth.component';
import CardDetailsComponent from './youtube/components/cardDetails/cardDetails.component';
import MainpageComponent from './youtube/components/mainpage/mainpage.component';
import HeaderInterceptor from './core/interceptor/header.interceptor';
import AdminComponent from './auth/pages/admin/admin.component';
import AdminOptionsComponent from './core/components/header/admin-options/admin-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultComponent,
    SearchInputComponent,
    SearchSettingsComponent,
    LogoComponent,
    LoginComponent,
    FilterwordPipe,
    SortingvideoPipe,
    MyColorDirective,
    ErrorComponent,
    AuthComponent,
    CardDetailsComponent,
    MainpageComponent,
    AdminComponent,
    AdminOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
