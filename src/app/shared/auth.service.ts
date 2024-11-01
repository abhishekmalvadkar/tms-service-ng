import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    // Your authentication logic here
    if(localStorage.getItem("TKN")){
      return true;
    }
    return false; // Change this to actual logic
  }

  redirectToSignIn() {
    this.router.navigate(['sign-in']);
  }

}
