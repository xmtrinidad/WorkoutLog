import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  selectedPost: Post;
  posts: Post[];
  post: Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  onSelectPost(post: Post): void {
    this.selectedPost = post;
  }

}
