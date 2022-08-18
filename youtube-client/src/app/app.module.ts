import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import SearchItemComponent from './core/components/search/search-item/search-item.component';
import SearchResultComponent from './core/components/search/search-result/search-result.component';
import SearchInputComponent from './core/components/search/search-input/search-input.component';
import SearchSettingsComponent from './core/components/search/search-settings/search-settings.component';
import LogoComponent from './core/components/header/logo/logo.component';
import LoginComponent from './core/components/header/login/login.component';
import FilterwordPipe from './shared/CustomPipes/filterword.pipe';
import SortingvideoPipe from './shared/CustomPipes/sortingvideo.pipe';
import MyColorDirective from './shared/Directives/my-color.directive';
import ErrorComponent from './core/pages/error/error.component';
import AuthComponent from './auth/pages/auth/auth.component';

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
