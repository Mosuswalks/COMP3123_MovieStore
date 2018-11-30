import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{ 
  path: 'videos', 
  component: MoviesComponent
},

{ 
  path: 'videos/:id',
  component: MovieDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
