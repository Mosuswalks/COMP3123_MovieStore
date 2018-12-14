import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { FirebaseAuth } from '@angular/fire';
import { FirebaseAuthState } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: FirebaseAuthState = null;

  constructor(public afAuth: AngularFireAuth,private router: Router) { 

  }

  public login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password).catch(function(error){
      return error.code + error.message
    });
    
  };

  public logout(){
    return this.afAuth.auth.signOut().catch(function(error){
      return error.code + error.message
    });
  }


  public registerUser(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error){
    })
  };

  public isAuthenticated(){
    return this.afAuth.user
  }

  // public login(): void{
  //   this.auth0.authorize();
  // }


  // public handleAuthentication(): void{
  //   this.auth0.parseHash((err, authResult) => {
  //     if(authResult && authResult.accessToken && authResult.idToken){
  //       window.location.hash = '';
  //       this.setSession(authResult);
  //       this.router.navigate(['/movies']);
  //     } else if (err){
  //       this.router.navigate(['/']);
  //       console.log(err);
  //     }
  //   });
  // }

  // private setSession(authResult): void{
  //   const expiresAT = JSON.stringify((authResult.expiresIn *  1000) + new Date().getTime());
  //   console.log(expiresAT);
  //   localStorage.setItem('access_token', authResult.accessToken);
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', expiresAT);
  // }
  

  // public isAuthenticated(): boolean {
  //   // Check whether the current time is past the token expiration.
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
  //   return new Date().getTime() < expiresAt;
  // }


  // public logout(): void{
  //   // Remove tokens and expiry from local storage
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');

  //   // Back to the application entry point
  //   this.router.navigate(['/']);
  // }

}
