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

  selectedExercises: number;

  muscleDropdownText = 'Choose Muscle Group';
  exercisesDropdownText = 'Number of Exercises';

  muscleGroupDropdown = 'up';
  exercisesDropdown = 'up';

  // Exercise box
  exerciseIndex = 1;

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
      this.selectedExercises = clickedText;
      this.exercisesDropdownText = clickedText;
      this.exercisesDropdown = 'up';
    } else {
      this.muscleDropdownText = clickedText;
      this.muscleGroupDropdown = 'up';
    }
  }

  /**
   * creates new array and pushes numbers
   * up to the passed in data into the array
   * @param data - the number passed in to iterate to
   * @return arr - the new array
   */
  generateArray(data) {
    const arr = [];
    for (let i = 1; i <= data; i++) {
      arr.push(i);
    }
    return arr;
  }

  onNextExercise(e) {
      this.exerciseIndex++;
  }

  onPrevExercise(e) {
    this.exerciseIndex--;
  }

}
