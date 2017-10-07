import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-posts';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {

  }

  onCategorySelect(item) {
    item.selected = item.selected !== true;
  }

}
