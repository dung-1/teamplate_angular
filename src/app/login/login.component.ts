import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../service/auth/auth.service';
import { ConstService } from '../../service/const.service';
import { ApiService } from '../../service/api/api.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  Btn_login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.apiService
        .post(`${ConstService.Authention}/signin`, { username, password })
        .pipe(catchError(this.handleError))
        .subscribe(
          (data: any) => {
            // Upon successful login, extract the token from the response (modify based on your API structure)
            const token = data.token || data.accessToken || null; // Check for different token property names
            this.authService.setToken(token);
            this.router.navigate(['']);
          },
          (error: any) => {
            console.error(error);
            alert('Username hoặc Password không chính xác !!!');
            this.router.navigate(['/login']);
          }
        );
    } else {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập !!!');
      this.router.navigate(['/login']);
    }
  }

  private handleError(error: any): Observable<any> {
    console.error(error);
    return throwError(error);
  }
}
