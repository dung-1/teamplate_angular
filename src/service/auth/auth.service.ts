import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConstService } from '../const.service';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //endpoint: string = 'http://192.168.24.32:8080';
  endpoint: string = ConstService.serverHost();
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  token = '';
  lang: any = '';
  currentUser: any = {};
  data: any[] = [];

  constructor(private http: HttpClient, public router: Router,private userService: UserService) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
  setLang(lang: string) {
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }
  
  getLang(): string {
    return this.lang;
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${ConstService.serverHost()}/${ConstService.Authention}/login`, { username, password })
      .pipe(
        tap(response => {
          if (response && response.accessToken) {
            localStorage.setItem('token', response.accessToken);
            this.userService.initializeUserFromToken();
          }
        })
      );
  }

}