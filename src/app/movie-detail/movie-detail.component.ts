import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: Object;

  constructor(private data: MoviesService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.movie$ = params.id)
  }

  ngOnInit() {
    this.data.getMovieDetails(this.movie$).subscribe(data => this.movie$ = data);
  }

}
