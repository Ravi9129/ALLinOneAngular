import { Component, ViewChild } from '@angular/core';

import { Child1Component } from '../child1/child1.component';
import { ChildComponent } from '../../ParentToChild/child/child.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  ClickCounter!: number;

  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }
  
  title = 'Component Interaction';
  Counter = 5;
 

  @ViewChild(Child1Component)
  child1!: Child1Component;
 
  increment() {
    this.child1.increment();
  }
 
  decrement() {
    this.child1.decrement();
  }
  
}
