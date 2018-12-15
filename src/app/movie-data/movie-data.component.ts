import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '../../models/movie-interface'
import { MatTableDataSource } from '@angular/material'
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatDialog, MatPaginator, MatSort} from '@angular/material';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { ReserveDialogComponent } from '../dialogs/reserve-dialog/reserve-dialog.component';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Director', 'Duration', 'Genre', 'Status', 'Year', 'Rating', 'Actions'];
  dataSource: MatTableDataSource<Movie>;
  isAdmin = localStorage.getItem('isAdmin')

  movies: Movie[];

  constructor(private movieService: MoviesService,public dialog: MatDialog, private auth: AuthService) { 
  }

  ngOnInit() {
     this.getMovies();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getMovies(){
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies
      this.dataSource = new MatTableDataSource(this.movies);
    });
  }

  reserveMovie(event, movie){
    const dialogRef = this.dialog.open(ReserveDialogComponent, {
      height: '400px',
      width: '400px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1){
        console.log('Movie Successfully Reserved.');
      }
    })
  }

  addMovie(event, movie) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      height: '400px',
      width: '400px',
      data: {movie: movie}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        console.log('Movie Successfully Added')
      }
    });
  }

  editMovie(event, movie){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '400px',
      width: '400px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        console.log("Succesfully Updated Movie");
      }
    })
  }


  deleteMovie(event, movie) {
   
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '250px',
      width: '300px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // for delete we use splice in order to remove single object from DataService
        this.movieService.deleteMovie(movie);
      }
    });
  }


  
}
