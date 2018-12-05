import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';


(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'NJm6X0751SNUGP104-87Wy4rLZS4DdGA',
    domain: 'moviebandit.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  constructor(public router: Router) { }

  public login(): void{
    this.auth0.authorize();
  }


  public handleAuthentication(): void{
    this.auth0.parseHash((err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken){
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/movies']);
      } else if (err){
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void{
    const expiresAT = JSON.stringify((authResult.expiresIn *  1000) + new Date().getTime());
    console.log(expiresAT);
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAT);
  }
  

  public isAuthenticated(): boolean {
    // Check whether the current time is past the token expiration.
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }


  public logout(): void{
    // Remove tokens and expiry from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // Back to the application entry point
    this.router.navigate(['/']);
  }

}
