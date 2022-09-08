import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    private fb: FormBuilder,
    private loginService: LoginService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [
        Validators.required,
        Validators.email,
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator,
      ]],
    });
  }

  private passwordValidator(control: FormControl): null | { [key: string]: boolean } {
    const { value } = control;
    const hasUpperLetter = /[A-Z]/.test(value);
    const hasLowerLetter = /[a-z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSpecialSymbols = /[!@#$%&*]/.test(value);

    switch (true) {
      case !hasUpperLetter:
        return { hasUpperLetter: true };
      case !hasLowerLetter:
        return { hasLowerLetter: true };
      case !hasNumbers:
        return { hasNumbers: true };
      case !hasSpecialSymbols:
        return { hasSpecialSymbols: true };
      default:
        return null;
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
