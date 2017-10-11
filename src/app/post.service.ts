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

  getLastPostId(): number {
    return POSTS[POSTS.length - 1].id;
  }

  getLastPost(): any {
    return POSTS[POSTS.length - 1];
  }
  setNextObject(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].entered === false) {
        arr[i].entered = true;
        break;
      }
    }
  }


}
