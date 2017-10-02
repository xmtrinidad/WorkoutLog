import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostsComponent,
    AddWorkoutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
