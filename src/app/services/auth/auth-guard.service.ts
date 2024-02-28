import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationCheckService } from './authentication-check.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {
  /**
   * @author suresh
   * @param AuthGuardService
   * Precheck brfore redirecting to another page.
   * < Write less & code more />
   */
  constructor(private auth:AuthenticationCheckService,private router: Router,) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser  = this.auth.isAuthenticated();
    let pagePath = state.url;
    console.log('authToken:',currentUser);
      if (currentUser) {
          return true;
      }
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['signin'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
