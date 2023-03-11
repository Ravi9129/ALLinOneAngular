import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  decrement() {
    throw new Error('Method not implemented.');
  }
  increment() {
    throw new Error('Method not implemented.');
  }
  @Input() count: number | undefined;

}
