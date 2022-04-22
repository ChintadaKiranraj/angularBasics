import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `
    <p>this component is creatd by using the {{ name }}</p>
    <p>{{ 'welcome to  :' + name }}</p>
    <p>{{ name.length }}</p>
    <p>{{ name.toUpperCase() }}</p>
    <p>{{ getMethod() }}</p>
    <p>{{ myLocation }}</p>

    <p [id]="inputEL">id value</p>
    if we usingthe [] then we should use an variable and assign a valueto the
    variable

    <input [disabled]="false" /> <br />
    if the value is true or false we can directly assign a value to it ......or
    else we can assign value to the variable and assign a value to the variable

    <input [disabled]="isDisabled" /> <br />
    or else assign a value to the variable and assign the variable to the
    property
    <input bind-disabled="isDisabled" /> <br />
    isDisabled............it is variable the value is present in the isDisabled
    is assigned to the attribute bind is a key word provide by the angular so we
    can use the key word directly
  `,
  styles: [
    `
      p {
        color: green;
        font-weight: 800;
      }
      h1 {
        color: red;
      }
    `,
  ],
})
export class TextComponent implements OnInit {
  public name = 'interpolation';
  public inputEL = 'inputElidS';

  public isDisabled = true;
  myLocation = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  getMethod() {
    return 'it is a method it is called by some one:  ' + this.name;
  }
}
