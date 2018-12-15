import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService
            ,private router: Router
            ,public afAuth: AngularFireAuth) {}


  ngOnInit() {
    
  }

  login(): void{
    
  }

  logout(): void{
    this.auth.logout();
    this.router.navigate(['/auth']);
  }
  

}
