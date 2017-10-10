import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
  animations: [
    trigger('dropdownState', [
      state('up', style({
        maxHeight: 0,
      })),
      state('down', style({
        maxHeight: '500px'
      })),
      transition('up <=> down', animate('.3s ease-in-out'))
    ])
  ]
})
export class AddWorkoutComponent implements OnInit {
  numberOfExercises = [1, 2, 3, 4, 5];
  exercisesDropdownText = 'Number of Exercises';

  // Number to determine number of exercise boxes
  selectedNumberOfExercises: number;
  // Animation state
  exercisesDropdown = 'up';

  constructor() {}

  ngOnInit() {

  }

  /**
   * Toggle state for drop downs based on
   * activated based on the dropdown clicked
   * @param e - the text of the dropdown clicked
   */
  toggleState() {
    this.exercisesDropdown = this.exercisesDropdown === 'up' ? 'down' : 'up';
  }

  /**
   * Get the text of the item clicked and replace
   * text of dropdown menu based on the clicked item
   * Also closes the menu when an item is clicked
   * @param e - the text of the item clicked
   */
  chooseItem(e) {
    const clickedText = e.target.innerText.trim();
    this.selectedNumberOfExercises = Number(clickedText);
    this.exercisesDropdownText = clickedText;
    // Animate drop down back up
    this.exercisesDropdown = 'up';
  }



}
