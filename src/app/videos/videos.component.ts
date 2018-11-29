import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  movies$: Object;
  
  constructor(private data: WebService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(data => this.movies$ = data);
  }

}
