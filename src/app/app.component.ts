import { Component } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  originalList = [{name: 'Bunt', pet: {type: 'Dog', date: new Date()}}, {name: 'Ini', pet: {type: 'Cat', date: new Date()}}];
  clonedList = [];

  cloneArray() {
    this.clonedList = cloneDeep(this.originalList);
    console.log(this.originalList);
    console.log(this.clonedList);
  }

  changeNestedObject() {
    this.clonedList[0].pet.type = 'Monkey';
  }
}
