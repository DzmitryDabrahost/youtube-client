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
import HeaderComponent from './header/header.component';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchResultComponent from './search/search-result/search-result.component';
import SearchInputComponent from './search/search-input/search-input.component';
import SearchSettingsComponent from './search/search-settings/search-settings.component';
import LogoComponent from './header/logo/logo.component';
import LoginComponent from './header/login/login.component';
import FilterwordPipe from './CustomPipes/filterword.pipe';
import SortingvideoPipe from './CustomPipes/sortingvideo.pipe';

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
