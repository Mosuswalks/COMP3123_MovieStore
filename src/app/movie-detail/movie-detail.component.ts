import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: Object;

  constructor(private data: WebService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.movie$ = params.id)
  }

  ngOnInit() {
    this.data.getMovieDetails(this.movie$).subscribe(data => this.movie$ = data);
  }

}
