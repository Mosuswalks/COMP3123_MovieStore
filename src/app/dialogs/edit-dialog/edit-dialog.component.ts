import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../../models/movie-interface';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  movie: Movie;

  formGroup = new FormGroup({
    id: new FormControl(this.data.id),
    Title: new FormControl(this.data.Title, Validators.required),
    Director: new FormControl(this.data.Director, Validators.required),
    Year: new FormControl(this.data.Year, Validators.required),
    Genre: new FormControl(this.data.Genre, Validators.required),
    Duration: new FormControl(this.data.Duration, Validators.required),
    Status: new FormControl(this.data.Status, Validators.required),
    Rating: new FormControl(this.data.Rating, Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public movieService: MoviesService) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close()
  }

  onSubmit(){
  }

  confirmUpdate(){
    this.movie = this.formGroup.value;
    this.movieService.updateMovie(this.movie);
  }
}
