import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
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
export class NavComponent implements OnInit {
  @Input() menuState: string;
  @Output() emitClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.emitClosed.emit('closed');
  }
}
