import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{ 
  path: 'movies', 
  component: MovieTableComponent
},

{ 
  path: 'movies/:id',
  component: MovieTableComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
