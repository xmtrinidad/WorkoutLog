import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { POSTS } from '../mock-posts';
import { CATEGORIES } from '../mock-posts';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  categories = CATEGORIES;
  lastPostId: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.lastPostId = this.postService.getLastPostId();
  }

  onCategorySelect(item) {
    item.selected = item.selected !== true;
  }

  getPostInfo(titleInput, dateInput, descInput) {
    const selectedCategories = [];
    this.categories.forEach((element) => {
      if (element.selected) {
        selectedCategories.push(element.src);
      }
    });
    const post = {
      id: this.lastPostId + 1,
      date: dateInput,
      title: titleInput,
      desc: descInput,
      categories: selectedCategories,
      exercises: []
    };
    POSTS.push(post);
  }

}
