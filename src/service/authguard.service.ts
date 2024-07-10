import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken(); // Retrieve the token from your AuthService
    if (token) {
      // Token exists and is valid, allow access to the route
      return true;
    } else {
      // No token or invalid token, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
