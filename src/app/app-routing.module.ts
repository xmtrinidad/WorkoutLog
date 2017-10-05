import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {AddWorkoutComponent} from './add-workout/add-workout.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostsComponent} from './posts/posts.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'add-workout',  component: AddWorkoutComponent },
  { path: 'posts/:id',  component: PostComponent },
  { path: '',  redirectTo: '/posts',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
