import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WebService{

    private baseUrl: string = 'http://localhost:63245/api'

    constructor(private http: HttpClient) { }

    checkCredentials(username, password){
        return this.http.get(`${this.baseUrl}/auth`);
    }

    getMovies(){
        return this.http.get(`${this.baseUrl}/videos`);
    }

    getMovieDetails(movieId){
        return this.http.get(`${this.baseUrl}/videos/`+movieId)
    }
}