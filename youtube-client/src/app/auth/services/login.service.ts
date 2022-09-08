import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  public isLogged$ = new BehaviorSubject<boolean>(!!localStorage.getItem('name'));

  public isAdmin$ = new BehaviorSubject<boolean>(!!localStorage.getItem('admin'));

  public loginName$ = new BehaviorSubject<string>(localStorage.getItem('name') || 'Your name');

  constructor(private router: Router) {}

  login(userInfo: { username: string, password: string }): Observable<boolean> {
    this.checkToAdmin(userInfo);
    this.loginName$.next(userInfo.username);
    localStorage.setItem('name', userInfo.username);
    this.isLogged$.next(true);
    return of(true);
  }

  checkToAdmin(userInfo: { username: string, password: string }) {
    if (userInfo.username === 'admin@admin.com' && userInfo.password === 'qweQWE1@') {
      localStorage.setItem('admin', 'true');
      this.isAdmin$.next(true);
    }
  }

  logout(): void {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('name');
      localStorage.removeItem('admin');
      this.router.navigate(['auth']);
      this.isLogged$.next(false);
      this.isAdmin$.next(false);
      this.loginName$.next('Your name');
    }
  }
}
