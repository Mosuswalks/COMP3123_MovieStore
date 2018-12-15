import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReserveDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, public moviesService: MoviesService) { }

  ngOnInit() {
  }

  onSubmit(){
  }

  onNoClick(){
    this.dialogRef.close();
  }

  confirmReservation(){
    this.moviesService.reserveMovie(this.data);
  }
}
