import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie-interface'


@Injectable({
    providedIn: 'root'
})
export class WebService{

    private baseUrl: string = 'http://localhost:63245/api'

    constructor(private http: HttpClient) { }

    getMovies(){
        return this.http.get<Movie[]>(`${this.baseUrl}/videos`);
    }

    getMovieDetails(movieId){
        return this.http.get<Movie>(`${this.baseUrl}/videos/`+movieId)
    }
}
