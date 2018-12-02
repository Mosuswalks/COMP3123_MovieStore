import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MovieTableDataSource } from './movie-table-datasource';
import { MoviesService } from '../services/movies/movies.service';
import { DataSource } from '@angular/cdk/table';
import { Movie } from '../../interfaces/movie-interface';
import { Subscribable, Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css'],
})
export class MovieTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataSource<Movie>;  
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Title', 'Year', 'Director', 'Genre', 'Duration', 'Rating', 'Status'];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.dataSource = new MovieTableDataSource(this.paginator,this.sort,this.movieService)
  }

  selectRow(row){
    console.log(row);
  }
}
