import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators'
import { Movie } from '../../../models/movie-interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieCollection: AngularFirestoreCollection<Movie>;
  movies: Observable<Movie[]>;
  movieDoc: AngularFirestoreDocument<Movie>;


  constructor(public afs: AngularFirestore) {

    this.movieCollection = this.afs.collection('movies')

    this.movies = this.movieCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Movie;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
   }


  getMovies(){
    return this.movies;
  };

  addMovie(movie: Movie){
    this.movieCollection.add(movie);
  };

  deleteMovie(movie: Movie){
    this.afs.collection('movies').doc(movie.id).delete().then(function(){
      console.log("Document Successfully Deleted");
    });
  }

  updateMovie(movie: Movie){
    this.afs.collection('movies').doc(movie.id).update(movie);
  }

  reserveMovie(movie: Movie){
    movie.Status = 'Unavailable';
    this.afs.collection('movies').doc(movie.id).update(movie) 
  }
}