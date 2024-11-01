import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router(); // Ensure to inject or manage the Router correctly
  const authService = new AuthService(router); // Use your actual method to get the AuthService

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['sign-in']);
    return false;
  }
};
