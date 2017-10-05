import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.getPost(+params.get('id')))
      .subscribe(post => this.post = post);
  }

}
