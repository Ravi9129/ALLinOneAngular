import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input()
  // count!: number;
  count = 0;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  increment() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  decrement() {
      this.count--;
      this.countChanged.emit(this.count);
  }

  // count = 0;
 
  //    increment() {
  //       this.count++;
  //     }
  //   decrement() {
  //       this.count--;
  //   }
  
}
