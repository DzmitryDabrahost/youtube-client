import { Component, OnInit } from '@angular/core';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  username: string;

  showButtonLogout: boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.loginName$.subscribe((value) => {
      this.username = value;
    });
    this.loginService.isLogged$.subscribe((value) => {
      this.showButtonLogout = !value;
    });
  }

  logOut(): void {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('name');
      this.loginService.login();
      this.loginService.logout();
    }
  }
}
