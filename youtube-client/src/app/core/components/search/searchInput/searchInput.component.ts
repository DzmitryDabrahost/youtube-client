import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';

import MainserviceService from 'src/app/shared/services/mainservice.service';
import KeyAPIService from 'src/app/youtube/services/youtubeApi.service';
import LoginService from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './searchInput.component.html',
  styleUrls: ['./searchInput.component.scss'],
})
export default class SearchInputComponent implements OnInit {
  searchInput: FormControl;

  constructor(
    private loginService: LoginService,
    private mainService: MainserviceService,
    private youtubeService: KeyAPIService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.searchInput = new FormControl(null, Validators.minLength(3));
    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        filter((value) => value.trim().length >= 3),
      )
      .subscribe((inputValue) => {
        if (this.loginService.isLogged$.value) {
          this.youtubeService.search(inputValue);
          this.mainService.showCards(inputValue);
          this.router.navigate(['search', inputValue]);
        }
      });
  }
}
