import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p [style.color]="'blue'">
      iam directly assingning the value for the color property
    </p>

    <p [style.color]="variableValue">
      iam assigning the value by using the variable like variableValue="red"
    </p>
    <p [ngStyle]="groupOfStyles">
      multiple styles are applying in style binding
    </p>
  `,
  styles: [],
})
export class StyleBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public variableValue = 'red';
  public groupOfStyles = {
    color: 'green',
    fontFamily: 'Robot',
    fontSize: '34px',
  };
}
