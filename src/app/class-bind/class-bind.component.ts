import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  template: `
    <p>class-bind works!</p>
    <p class="pageStyele">
      styles is applied based onthe class pageStyles is a class name we are
      directly provideng the class aname to the element
    </p>

    <p [class]="bindPagSty">style is based on the binding</p>
    here the bindPagSty is the variable in,we are assigned a class name to the
    variable and
    <p [class]="myStyle1">adding the style</p>

    <p [class.myFontSiz]="isCondition">
      appling the styles based onthe condition
    </p>
    <p [ngClass]="groupOfClass">this is the group class application element</p>
    <p [class]="classObj">Kiran raj chintada</p>
  `,
  styles: [
    `
      p {
        color: blue;
      }

      .pageStyele {
        color: orange;
        font-family: 'Roboto';
      }

      .pageBindStyle {
        color: green;
        font-size: 30px;
      }

      .myText {
        color: brown;
        font-family: 'TimesNewroman';
      }
      .myFontSiz {
        font-size: 40px;
      }
      .myText3 {
        font-family: 'Roboto';
        font-weight: 900;
        font-style: italic;
        color: red;
      }
    `,
  ],
})
export class ClassBindComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public bindPagSty = 'pageBindStyle';
  public myStyle1 = 'myText';
  public isCondition = true;
  public groupOfClass = {
    myText: this.isCondition,
    myFontSiz: this.isCondition,
    myText3: this.isCondition,
  };
  public classObj = {
    color: 'red',
    fontFamily: 'Roboto',
    backgroundColor: 'blue',
    fontWeight: 900,
  };
}
