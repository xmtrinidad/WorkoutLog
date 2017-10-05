import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPost(id: number): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post.id === id));
  }

}
