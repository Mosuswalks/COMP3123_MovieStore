import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../../interfaces/movie-interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movie: Movie[];

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:63245/api'

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getMovieDetails(movieId){
    return this.http.get<Movie>(`${this.baseUrl}/movies/`+movieId);
  }

}
