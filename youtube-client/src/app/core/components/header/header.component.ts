import { Component, OnInit } from '@angular/core';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  username: string;

  isSettingsButtonClicked: boolean = false;

  showSettingsBlock: boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.loginName$.subscribe((value) => {
      this.username = value;
    });
  }

  changeSettingsOptions(): void {
    if (this.loginService.isLogged$.value) {
      this.isSettingsButtonClicked = !this.isSettingsButtonClicked;
    }
  }
}
