import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CATEGORIES } from '../mock-posts';

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
  categories = CATEGORIES;
  numberOfExercises = [1, 2, 3, 4, 5];
  sets = [1, 2, 3, 4, 5];
  selectedSets = 1;
  numOfInputs = [1];

  muscleDropdownText = 'Choose Muscle Group';
  exercisesDropdownText = 'Number of Exercises';

  muscleGroupDropdown = 'up';
  exercisesDropdown = 'up';

  constructor() {}

  ngOnInit() {
  }

  /**
   * Toggle state for drop downs based on
   * activated based on the dropdown clicked
   * @param e - the text of the dropdown clicked
   */
  toggleState(e) {
    const clickedText = e.target.innerText.trim();
    // Check which drop down is clicked based off the text
    if ( Number(clickedText) || clickedText === 'Number of Exercises' ) {
      this.exercisesDropdown = this.exercisesDropdown === 'up' ? 'down' : 'up';
    } else {
      this.muscleGroupDropdown = this.muscleGroupDropdown === 'up' ? 'down' : 'up';
    }
  }

  /**
   * Get the text of the item clicked and replace
   * text of dropdown menu based on the clicked item
   * Also closes the menu when an item is clicked
   * @param e - the text of the item clicked
   */
  chooseItem(e) {
    const clickedText = e.target.innerText.trim();
    if (Number(clickedText)) {
      this.exercisesDropdownText = clickedText;
      this.exercisesDropdown = 'up';
    } else {
      this.muscleDropdownText = clickedText;
      this.muscleGroupDropdown = 'up';
    }
  }

  /**
   * clear numOfInputs array and create new one
   * based on number of sets chosen
   * @param data - the number of sets
   */
  generateSetInputsArray(data) {
    this.numOfInputs = [];
    for (let i = 1; i <= data; i++) {
      this.numOfInputs.push(i);
    }
  }

}
