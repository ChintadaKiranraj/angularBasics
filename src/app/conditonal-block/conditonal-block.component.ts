import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditonal-block',
  template: `
    <h1 *ngIf="conditionVariable; else elseBlock">this is true block</h1>
    <ng-template #elseBlock>
      <h1>This is the else block</h1>
    </ng-template>

    <h1 *ngIf="conditionVariable; then TrueBlock; else falseBlock"></h1>
    <ng-template #TrueBlock>
      <h1>This is True block</h1>
    </ng-template>

    <ng-template #falseBlock>
      <h1>This is else block</h1>
    </ng-template>

    <----------------------------------------------------------------->
    <div [ngSwitch]="mycondition">
      <h1 *ngSwitchCase="'one'">this is block one</h1>
      <h1 *ngSwicthCase="'two'">this is block two</h1>
      <h1 *ngSwitchCase="'three'">this is block three</h1>
      <h1 *ngSwitchDefault>this is default block</h1>
    </div>
    <-------------------------->
    <p>it is the array</p>
    <ul>
      <li>index as i</li>
      <li>first as i</li>
      <li>last as i</li>
      <li>odd as i</li>
      <li>even as i</li>
    </ul>
    <div *ngFor="let eqachVal of userList; even as i">
      <h1>{{ i }}----------{{ eqachVal }}</h1>
    </div>

    <p>This is the object</p>
    <div *ngFor="let eachItem of userObject">
      <h1>
        {{ eachItem.name }} :
        {{ eachItem.age }}
      </h1>
    </div>
  `,

  styles: [],
})
export class ConditonalBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public conditionVariable = false;
  public mycondition = '';
  public userList = [
    'Angula',
    'Reactjs',
    'javaScript',
    'Html',
    'Css',
    'Bootstrap',
  ];
  public userObject = [
    {
      name: 'raj',
      age: 25,
    },
    {
      name: 'kiran raj',
      age: 27,
    },
  ];
}
