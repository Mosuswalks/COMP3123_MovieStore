import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MoviesService } from './services/movies/movies.service';
import { AuthService } from './services/auth/auth.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


let routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MovieTableComponent
  },
  {
    path: 'auth',
    component: AuthenticationComponent
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieTableComponent,
    AuthenticationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ MoviesService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
