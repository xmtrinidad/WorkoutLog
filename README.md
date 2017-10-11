# WorkoutLog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## About this project
Post a workout and log workout information

## Goals
To continue learning Angular, Typescript and various web dev technologies

### What I've Learned


| Description        | Source  |
|:-------------------|:-----------------------|
|Make a new project using Angular CLI with default scss |[Stack overflow](https://stackoverflow.com/questions/36220256/angular-cli-sass-options)|
|Set font-awesome in project using the angular CLI|[Angular CLI Github](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-font-awesome.md)|
|Checker pattern with CSS|[Stack overflow](https://stackoverflow.com/questions/31184643/how-to-2-column-alternating-div-background)|
|Angular Animations|[Angular.io](https://angular.io/guide/animations)|
|Lifecycle Hooks -- ngOnChanges used to get number of exercises|[Angular.io](https://angular.io/guide/lifecycle-hooks)|
|NgClass to set classes based on conditions|[Angular.io](https://angular.io/api/common/NgClass)|
|Get today's date and update input field|[Stack overflow](https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript)|

### Questions

Any questions I have throughout the development of this app will go here 
and in the section below I will document the resolution.

|Num| Source  | Resolved?|
|---|--------|----------|
|1|How do I create a check pattern with CSS?|Yes|
|2|How do I use Angular Animations?|Yes|
|3|How do use Angular routing?||
|4|How do I go back a page using Angular routing?|
|5|How do I change the number of weight/reps rows in my add-workout component based on the number of sets selected?|


### Answers and Walkthroughs

#### 1.  How do I create a check pattern with CSS?

For the posts component, there are posts and I wanted alternating colors for 
every other post.  For mobile, using nth-child(even) works fine for this, 
but when breaking out into two or three columns for responsiveness, 
using even no longer works because every even post is on the right.

The solution was simple, using nth-child((an + b) formula, 
where a is the cycle size, n is the counter and b is an offset value.  
The following code creates a checkered pattern for both 2 and 3 columns:

```css
.post:nth-child(4n+2), .post:nth-child(4n+3) {
  background: #b9d1dd;
}
```

#### 2.  How do I use Angular Animations?

Before using animations inside of a component, 
the app module needs to import a few things.  This is what the app 
module should look like with the required animation imports:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  // ... more stuff ...
})
export class AppModule { }
```

After these are imported in the app module, the components using the 
animations need to import the following from @angular/animations:

* [trigger](https://angular.io/api/animations/trigger)
* [state](https://angular.io/api/animations/state)
* [style](https://angular.io/api/animations/style)
* [animate](https://angular.io/api/animations/animate)
* [transition](https://angular.io/api/animations/transition)
```typescript
import { trigger, state, style, animate, transition } from '@angular/animations';
```
With these imports included, animations can be defined inside the 
@Component metadata.  Here’s an example of the animation for the nav menu:
```typescript
@Component({
  animations: [
    trigger('menuToggle', [
      state('open', style({
        left: '0'
      })),
      state('closed', style({
        left: '-770px'
      })),
      transition('open <=> closed', animate('400ms ease-in-out'))
    ])
  ]
})
```
This animation has an animation trigger called menuToggle.  The state starts as closed with a style property of left (position: absolute is defined in the components css).  There’s also an ‘open’ state associated with this animation that sets the left style to 0 (this brings the menu back into view when it is triggered).

The transition part defines in which way the animation occurs.  The ⇔ syntax indicates that the transition will occur in both directions using transition defined by the animate parameter.  The animate parameter in this case says to perform the transition in 400ms ease-in-out.

To apply the animation, the element using it needs to be property bound to the trigger reference and set to the state.  In the case of the nav bar, it’s initial state is closed and is toggled to ‘open’ when the menu button is clicked
```html
<div [@menuToggle]="menuState" class="nav-menu">
```

#### 3. How do I use Angular Routing?
This is a review for something I did about a month ago.  I don’t remember all the aspects of it so I need to go over it again.

#### 4. How do I go back a page using Angular Routing?
To go back a page you first need to import Location from @angular/common for the component that is being affected.

The next step is to initialize it in the constructor inside the @Component  like so:
```typescript
constructor(private location: Location) { }
```
Then you can create a method goBack() and have it use the initialized location variable:
```typescript
goBack() {
  this.location.back();
}
```

This method can then be applied to the nav element on click inside the component HTML.

#### 5. How do I change the number of weight/reps rows in my add-workout component based on the number of sets selected?

### REFACTORED AND NOT APPLIED TO PROJECT -- This documentation will remain here for reference purposes

The main directive used for this is the ngModel, which is used for two way binding.  What I wanted to do was create an iterable array based on the number of sets chosen in the add-workout component

Inside the component there are two variables defined as selectedSets, which is set to 1 and numOfInputs array that has one item in it, the number 1 (this is so it matches the default set value and displays at least one weight/reps row).

The selectedSets variable is property bound to ngModel; this is what allows two-way binding.  The default is 1 set, but if the value changes it will flow back to the selectedValue variable.  This is what the element looks like with the binding:
```html
<select (ngModelChange)="generateSetInputsArray($event)" [(ngModel)]="selectedSets" name="exercise_form" class="form-control" type="number" id="user_sets">
```
However, the selectedSets value is not used to generate the inputs.  There is a method I called generateSetInputArray(data):
```typescript
generateSetInputsArray(data) {
  this.numOfInputs = [];
  for (let i = 1; i <= data; i++) {
    this.numOfInputs.push(i);
  }
}
```
This method iterates over the data passed into it.  This data comes from the ngModelChange event that is bound to the select element where you can choose the number of sets.  When a change occurs to the ngModel (which, again is bound to selectedSets) that change value is emitted to the generateSetInputsArray method ($event parameter).  

Based on this data, the numOfInputs array is created.  The element that creates the weight/reps row uses an *ngFor loop to create the rows based on the number of sets.
