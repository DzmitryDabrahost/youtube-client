import { Component } from '@angular/core';
import { Router } from '@angular/router';
import MainserviceService from 'src/app/shared/services/mainservice.service';
import LoginService from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export default class SearchInputComponent {
  cardSearchValue: string;

  constructor(
    private loginService: LoginService,
    private mainService: MainserviceService,
    public router: Router,
  ) {}

  enterSearchValue(valueInput: string) {
    if (this.loginService.isLogin()) {
      this.cardSearchValue = valueInput;
      this.mainService.showCards(this.cardSearchValue);
      if (this.cardSearchValue) {
        this.router.navigate(['search', valueInput]);
      }
    }
  }
}
