import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public movieService: MoviesService) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close()
  }

  confirmDelete(){
    this.movieService.deleteMovie(this.data);
  }
}
