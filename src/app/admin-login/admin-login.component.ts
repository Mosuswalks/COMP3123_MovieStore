import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginAdmin(){
    this.authService.adminLogin(this.loginForm.get("email").value,this.loginForm.get("password").value)
    console.log("Successfully Logged In Admin")
    this.router.navigateByUrl('/auth');
  }
  

}
