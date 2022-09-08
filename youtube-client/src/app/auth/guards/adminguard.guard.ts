import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import LoginService from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class AdminguardGuard implements CanActivate {
  constructor(
    private auth: LoginService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.auth.isAdmin$.value) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
