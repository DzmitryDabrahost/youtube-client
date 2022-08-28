import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent implements OnInit {
  hide: boolean = true;

  form: FormGroup;

  buttonValue: string;

  loginName: string = localStorage.getItem('name') || '';

  loginPass: string = localStorage.getItem('password') || '';

  constructor(
    private loginService: LoginService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.buttonValue = !localStorage.getItem('name') ? 'LogIn' : 'LogOut';
  }

  addLogin(): void {
    if (this.form.valid && localStorage.getItem('name')) {
      this.buttonValue = 'LogIn';
      this.loginName = '';
      this.loginPass = '';
      localStorage.clear();
      this.loginService.changeLoginStatus(false);
    } else {
      localStorage.setItem('name', this.form.value.username);
      localStorage.setItem('password', this.form.value.password);
      this.loginService.changeLoginName(this.form.value.username);
      this.buttonValue = 'LogOut';
      this.loginService.changeLoginStatus(true);
      this.accessGood();
    }
  }

  accessGood() {
    this.router.navigate(['']);
  }
}
