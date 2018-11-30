import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  
  constructor(private data: WebService) { }

  ngOnInit() {
    this.data.getMovies().subscribe((data: Movie[]) => this.movies = data);
    
  }

}
