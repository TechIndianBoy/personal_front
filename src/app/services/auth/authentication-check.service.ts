import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable as __Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationCheckService {

  /**
   * @author suresh
   * @param AuthGuardService
   * Check the user log status.
   * < Write less & code more />
   */
  authenticationState:boolean = false;

  constructor() {
    this.checkToken();
  }

  async checkToken() {
    let token = await localStorage.getItem(TOKEN_KEY);
    if(token){
      this.authenticationState = true;
    }
  }
  getAuthToken(){
    return window.localStorage.getItem(TOKEN_KEY);
  }

  async saveAuth(token) {
    await localStorage.setItem(TOKEN_KEY,'Bearer '+token);
    this.authenticationState = true;
    return true;
  }

  logout() {
    localStorage.clear();
    this.authenticationState = false;
    return;
  }

  isAuthenticated() {
    return this.authenticationState;
  }

}
