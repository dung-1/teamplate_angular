import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, of } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { ConstService } from '../const.service';
import { LoaderService } from '../loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private loadingService: LoaderService
  ) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  endpoint: string = ConstService.serverHost();

  get(bareURl: string): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${bareURl}`, {
      headers: this.headers,
    });
  }

  post(bareURl: string, body: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/${bareURl}`, body, {
      headers: this.headers,
    });
  }

  put(bareURl: string, body: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${bareURl}`, body, {
      headers: this.headers,
    });
  }

  delete(bareURl: string, ): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${bareURl}`, {
      headers: this.headers,
    });
  }
}
