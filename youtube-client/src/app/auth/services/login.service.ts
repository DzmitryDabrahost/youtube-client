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

  login(userInfo: { username: string, password: string }): Observable<boolean> {
    this.loginName$.next(userInfo.username);
    localStorage.setItem('name', userInfo.username);
    this.isLogged$.next(true);
    return of(true);
  }

  logout(): void {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('name');
      this.router.navigate(['auth']);
      this.isLogged$.next(false);
      this.loginName$.next('Your name');
    }
  }
}
