import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormControl,FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../interfaces/user-interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required])
  })

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.registrationForm.valid){
      console.log('this far')
      this.user.fullName = this.registrationForm.get("name").value;
      this.user.email = this.registrationForm.get("email").value;
      this.user.password = this.registrationForm.get("password").value;
     
    }
    console.log(this.registrationForm.get("name").value);
    console.log(this.registrationForm.get("email").value);
    
  }

  matchPassword(){
    this.user.password = this.registrationForm.get("password").value;
    let passwordConfirm = this.registrationForm.get("passwordConfirm").value

    if(this.user.password === passwordConfirm){
      return this.user.password;
    }
    
  }

}
