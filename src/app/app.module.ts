import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { PostComponent } from './post/post.component';
import { NavComponent } from './nav/nav.component';

import {PostService} from './post.service';
import { ExercisesComponent } from './add-workout/exercises/exercises.component';
import { ProgressBarComponent } from './add-workout/progress-bar/progress-bar.component';
import { DesktopNavComponent } from './nav/desktop-nav/desktop-nav.component';
import { DescriptionComponent } from './posts/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostsComponent,
    AddWorkoutComponent,
    PostComponent,
    NavComponent,
    ExercisesComponent,
    ProgressBarComponent,
    DesktopNavComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
