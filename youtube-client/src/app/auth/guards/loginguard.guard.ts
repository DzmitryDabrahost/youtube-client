import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import LoginService from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class LoginguardGuard implements CanActivate {
  constructor(
    private auth: LoginService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLogin()) {
      return of(true);
    }
    this.router.navigate(['/auth']);
    return of(false);
  }
}
