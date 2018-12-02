import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:63245/'

  constructor(private http: HttpClient) { }

  validateUser(email: String, password: String){
    
  }

}
