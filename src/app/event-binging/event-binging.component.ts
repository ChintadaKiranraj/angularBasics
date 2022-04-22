import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binging',
  template: `
    <p>click the button to show the text :{{ greeting }}</p>
    <button (click)="clickMe()" class="Btn">ClickMe</button><br />

    <hr />
    <p>this is the two way data binding using the keydown event</p>
    <input
      type="text"
      class="inputBox"
      #input1
      (keydown)="keyPrssed(input1.value)"
    />
    <br />

    <h1>i will print while user entering :{{ value1 }}</h1>
    <hr />

    <hr />
    <input #input2 /><br />
    <button (click)="getUserInput(input2.value)" class="Btn">Submit</button>

    <p>
      i will show the value when the user press the Submit Button
      <span class="userStyle">{{ value2 }}</span>
    </p>

    <hr />
    <p>this is the two way data binging using [(ngModel)]=value3</p>
    <input type="text" [(ngModel)]="value3" />
    <br />

    <p>{{ value3 }}</p>
  `,
  styles: [
    `
      .Btn {
        color: red;
        width: 120px;
        font-weight: 900;
        height: 50px;
        padding: 10px;
        background-color: skyblue;
        border-radius: 7px;
        margin-bottom: 10px;
        margin-top: 10px;
        border-style: none;
      }
      .inputBox {
        margin-bottom: 10px;
      }

      .userStyle {
        color: red;
      }
    `,
  ],
})
export class EventBingingComponent implements OnInit {
  constructor() {}
  public greeting = '';
  public value1 = '';
  public value2 = null;
  public value3 = '';
  ngOnInit(): void {}

  clickMe() {
    this.greeting = 'ima here because the button is clicked ';
  }

  getUserInput(message: any) {
    if (message == '') {
      alert('please enter the text');
    }
    this.value2 = message;
  }
  keyPrssed(input: any) {
    this.value1 = input;
  }
}
