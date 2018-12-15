import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../../models/movie-interface';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {  
  movie: Movie;
  formGroup = new FormGroup({
    Title: new FormControl('', Validators.required),
    Director: new FormControl('', Validators.required),
    Year: new FormControl('', Validators.required),
    Genre: new FormControl('', Validators.required),
    Duration: new FormControl('', Validators.required),
    Status: new FormControl('', Validators.required),
    Rating: new FormControl('', Validators.required)
  });


  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public movieService: MoviesService) { }


  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close()
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }

  confirmAdd(){
    this.movie = this.formGroup.value;
    console.log(this.formGroup.value);
    this.movieService.addMovie(this.movie);
  }

//   getErrorMessage() {
//     return this.formControl.hasError('required') ? 'Required field' :
//       this.formControl.hasError('email') ? 'Not a valid email' :
//         '';
// }

}
