import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuState = 'closed';
  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }
}
