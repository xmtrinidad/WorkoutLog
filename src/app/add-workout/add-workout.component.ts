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
  sets = [1, 2, 3, 4, 5];

  muscleDropdownText = 'Choose Muscle Group';
  exercisesDropdownText = 'Number of Exercises';

  muscleGroupDropdown = 'up';
  setsDropdown = 'up';

  constructor() { }

  ngOnInit() {
  }

  toggleState(e) {
    const clickedText = e.target.innerText.trim();
    // Check which drop down is clicked based off the text
    if ( Number(clickedText) || clickedText === 'Number of Exercises' ) {
      this.setsDropdown = this.setsDropdown === 'up' ? 'down' : 'up';
    } else {
      this.muscleGroupDropdown = this.muscleGroupDropdown === 'up' ? 'down' : 'up';
    }
  }

  chooseItem(e) {
    const clickedText = e.target.innerText.trim();
    if (Number(clickedText)) {
      this.exercisesDropdownText = clickedText;
      this.setsDropdown = 'up';
    } else {
      this.muscleDropdownText = clickedText;
      this.muscleGroupDropdown = 'up';
    }
  }

}
