import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  login(): void{
    this.auth.login();
  }

  logout(): void{
    this.auth.logout();
  }
  
}
