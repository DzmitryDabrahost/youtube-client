import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import LoginService from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent implements OnInit {
  hide: boolean = true;

  form: FormGroup;

  loginName: string = localStorage.getItem('name') || '';

  constructor(
    private loginService: LoginService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    if (this.loginService.isLogged$.value) {
      this.router.navigate(['/']);
    }
  }

  addLogin(): void {
    this.loginService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
    }).unsubscribe();
  }
}
