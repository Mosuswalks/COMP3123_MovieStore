import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MoviesService } from './services/movies/movies.service';
import { AuthService } from './services/auth/auth.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Validator } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { MovieDataComponent } from './movie-data/movie-data.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { ReserveDialogComponent } from './dialogs/reserve-dialog/reserve-dialog.component';


let routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MovieDataComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'auth',
    component: AuthenticationComponent
  },
  
  {
    path: 'add',
    component: AddDialogComponent
  },

  {
    path: 'edit',
    component: EditDialogComponent
  },

  {
    path: 'delete',
    component: DeleteDialogComponent
  },

  {
    path:'reserve',
    component: ReserveDialogComponent
  }


];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MovieDetailComponent,
    AuthenticationComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    MovieDataComponent,
    EditDialogComponent,
    ReserveDialogComponent
    
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
    FormsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'movie-bandit'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],
  providers: [ MoviesService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
