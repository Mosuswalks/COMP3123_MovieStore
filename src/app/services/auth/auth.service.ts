import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/auth'
import { FirebaseAuth } from '@angular/fire';
import { FirebaseAuthState } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../../models/user-interface';
import { isNull } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  
  token: string;

  user: Observable<User>;

  //Get the user ID
  uid = this.afAuth.authState.subscribe(authState => {
    if(!authState){
      return null;
    }return authState.uid
  });


  // Check if the user is an Admin
  isAdmin = this.afStore.collection('admin', ref => ref.where('id', '==', this.uid.toString()))

  constructor(public afAuth: AngularFireAuth,private router: Router,private afStore: AngularFirestore) { 
   
  }

  get isLoggedIn() {
    return  JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  public login(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).catch(function(error){
      return error.code + error.message
    });
    this.router.navigate(['/movies']);
  };
  
  public logout(){
    return this.afAuth.auth.signOut().catch(function(error){
      localStorage.removeItem('isAdmin');
      return error.code + error.message;
    });
  }

  // store new user in firebase store
  registerUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        )
  }

  setLoggedIn(status: boolean) {
    this.loggedInStatus = status;
    // set value in client-side local storage and persist our session on browser reload
    localStorage.setItem('loggedIn', 'true');
}

  public isAuthenticated(){
    return this.uid !== null;
  }

  public adminLogin(email: string, password: string){
    // Had to use this silly hack because i couldnt for the life of me figure out roles in FireStore  Auth.
    if(email == "admin@georgebrown.ca"){
      this.login(email,password)
      localStorage.setItem('isAdmin', 'true')
    }
  }
}