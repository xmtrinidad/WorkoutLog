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
|@ViewChild - Get DOM elements that use the #selector|[Angular.io](https://angular.io/api/core/ViewChild)|

### Questions

Any questions I have throughout the development of this app will go here 
and in the section below I will document the resolution.

|Num| Source  | Resolved?|
|---|--------|----------|
|1|How do I create a check pattern with CSS?|Yes|
|2|How do I use Angular Animations?|Yes|
|3|How do I use Angular routing?|Yes|
|4|How do I go back a page using Angular routing?|Yes|
|5|How do I change the number of weight/reps rows in my add-workout component based on the number of sets selected?|Yes|
|6|What is ngOnChanges and how does it work?|Yes|


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

The first step to routing is to make an app.module.ts file.  RouterModule and Routes need to be imported from @angular router.  Here is the shell before defeining routes:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  
})

export class AppRoutingModule {}
```
Next, routes need to be defined.  These routes are of type <i>Routes</i> which was imported on the initial set up.
```typescript
const routes: Routes = [];
```
Inside of this routes array are objects.  Each object has <b>path</b> and <b>component</b> properties.  The path value is the name of the route and the component value is the component associated with that route.  Every path/component pair needs to import the component being used for routing.  You can also define a redirect route in this array of routes, which will redirect an empty path to whatever value the <i>redirectTo</i> property is associated with.  The redirect route also needs a <i>patchMatch</i> property set to 'full' in order to work properly.  Here are the routes defined in this app:
```typescript
const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'posts/:id',  component: PostComponent },
  { path: '',  redirectTo: '/posts',  pathMatch: 'full' }
];
```
These routes need to be associated with the RouterModule that was imported.  RouterModule has a <i>forRoot() method</i> where you can pass the routes as a paramter.  RouterModule also needs to be included in the <i>imports</i> array inside the @NgModule decorator.  In order to use the RouterModule in other components, it needs to be included in the exports array inside the @NgModule decorator.  This is what the entire app-routing.module.ts file looks like:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {AddWorkoutComponent} from './add-workout/add-workout.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostsComponent} from './posts/posts.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'posts/:id',  component: PostComponent },
  { path: '',  redirectTo: '/posts',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
```
The final step for defeining routes is to include the app-routing.module.ts file into the app-module by importing it then including it in the <i>imports</i> array inside the @NgModule decorator of the app.module:
```typescript
import { AppRoutingModule } from './app-routing.module';

NgModule({
  ...
  imports: [
    ...
    AppRoutingModule
  ]
})
```
Once this set up is complete, a <i>routerLink</i> can be used to navigate to the defined routes.  I have several routerLinks in this project.  Here is an example of routing to the add-post component
```html
<a routerLink="/posts" href="#" class="nav-menu__list-item--link"><i class="fa fa-list" aria-hidden="true"></i> View Posts</a>
```
This routerLink is set to '/posts' which was defined in the app-routing module.  When this element is clicked, it will go to the component associated with this router link name, which is the PostsComponent.



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

#### 6. What is ngOnChanges and how does it work?
Within the add-workout component there is a progress bar component that keeps track of the number of exercises to input.  This information is emitted to the parent component, which then passes that information to the exercise component that detects when "submit exercise" is clicked. Back in the progress-bar component there is a <i>makeProgressObject()</i> method:
```typescript
makeProgressObject() {
    this.progress = [{ num: 1, entered: true}];
    for (let i = 2; i <= this.numberOfExercises; i++) {
      this.progress.push({ num: i, entered: false});
    }
    this.emitProgressBar.emit(this.progress);
  }
```
This method numbers the progress bar boxes and gives it an 'entered' property.  The progress bar numbers are determined by what is chosen in the dropdown from the parent component.  If this number changes, the <i>makeProgressObject</i> needs to be run again.  This is where ngOnChanges() is used.
```typescript
ngOnChanges() {
    this.makeProgressObject();
  }
```
Every time a change occurs in the number of exercises, the makeProgressObject is ran again to make a new progress bar.  Quoting from Angular.io, "Respond when Angular (re)sets data-bound input properties." and this is what occurs in this case.

In order to use ngOnChanges, it needs to be imported into the component that is using it and implemented like so:
```typescript
import { ... OnChanges ...} from '@angular/core';
export class ProgressBarComponent implements OnChanges {
  ngOnChanges() {
    this.makeProgressObject();
  }
}
```
## Conclusion
This project is far from 'done', but the basic prototype is finished.  There are many things I'd like to improve.  As always, the design could be better.  At my current skill level, I don't know if there are ways to improve component interaction.  There is a lot of testing that can be performed and things like catching blank inputs could be implemented.  As my Angular and web dev skills continue to improve, I hope to come back to this project and redesign it.



