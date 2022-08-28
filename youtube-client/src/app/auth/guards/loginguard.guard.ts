import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import LoginService from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class LoginguardGuard implements CanActivate {
  constructor(
    private auth: LoginService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.auth.isLogged$.value) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
