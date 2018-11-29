import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { HttpModule } from '@angular/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

let routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VideosComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
