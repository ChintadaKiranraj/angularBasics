import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-comp-intreaction',
  template: `
    <p>{{ kiranParent }}</p>

    <button (click)="fromChildToParent()">FromChild</button>
  `,
  styles: [],
})
export class CompIntreactionComponent implements OnInit {
  // @Input('kiranParent') public Parent: any;    we can use in this way also
  @Input() public kiranParent: any;
  // data from parent

  @Output() public childInfo: any = new EventEmitter();
  // data from child to parent it means child component to root component
  fromChildToParent() {
    this.childInfo.emit('from child to parent');
  }
  constructor() {}
  ngOnInit(): void {}
}
