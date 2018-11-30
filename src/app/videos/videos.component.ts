import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  movies: Movie[];
  
  constructor(private data: WebService) { }

  ngOnInit() {
    this.data.getMovies().subscribe((data: Movie[]) => this.movies = data);
    
  }

}
