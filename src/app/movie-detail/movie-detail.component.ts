import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '../../interfaces/movie-interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId: any;
  selectedMovie: any;

  constructor(private data: MoviesService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.movieId = params.id)
  }

  ngOnInit() {
    
  }

  getMovieDetails(){
    // this.selectedMovie = this.data.getMovieDetails(this.movieId);
  }

}
