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
import { ExerciseComponent } from './add-workout/exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostsComponent,
    AddWorkoutComponent,
    PostComponent,
    NavComponent,
    ExerciseComponent
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
