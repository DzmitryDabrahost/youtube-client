import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  public isLogged$ = new BehaviorSubject<boolean>(!!localStorage.getItem('name'));

  public loginName$ = new BehaviorSubject<string>(localStorage.getItem('name') || 'Your name');

  constructor(private router: Router) {}

  login(userInfo?: { username: string, password: string }): Observable<string | boolean> {
    if (userInfo) {
      this.loginName$.next(userInfo.username);
      localStorage.setItem('name', userInfo.username);
      this.isLogged$.next(true);
      return of(true);
    }
    this.isLogged$.next(false);
    this.loginName$.next('Your name');
    return of(false);
  }

  logout(): void {
    this.router.navigate(['auth']);
  }
}
