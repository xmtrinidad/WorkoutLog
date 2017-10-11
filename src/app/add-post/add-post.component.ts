import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  // Inputs
  @ViewChild('titleInput') postTitle: ElementRef;
  @ViewChild('dateInput') postDate: ElementRef;
  @ViewChild('descInput') postDesc: ElementRef;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.lastPostId = this.postService.getLastPostId();
  }

  /**
   * Get today's date and format it for date input
   * @return {string} - the date
   */
  getToday(): string {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  /**
   * Toggle selected category
   * @param item - the category clicked
   */
  onCategorySelect(item) {
    item.selected = item.selected !== true;
  }


  /**
   * Get input information and make a post object to
   * push onto the categories array
   */
  getPostInfo() {
    const post = {
      id: this.lastPostId + 1,
      date: this.postDate.nativeElement.value,
      title: this.postTitle.nativeElement.value,
      desc: this.postDesc.nativeElement.value,
      categories: this.getSelectedSrc(),
      exercises: []
    };
    POSTS.push(post);
  }


  resetCategories() {
    this.categories.forEach((category) => {
      category.selected = false;
    });
  }

  /**
   * Iterate through all categories and push on selected
   * to an array
   * @return {Array} - the array of selected categories
   */
  getSelectedSrc() {
    const arr = [];
    this.categories.forEach((element) => {
      if (element.selected) {
        arr.push(element.src);
      }
    });
    return arr;
  }

}
