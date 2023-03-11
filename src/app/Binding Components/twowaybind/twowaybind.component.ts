import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css']
})
export class TwowaybindComponent {

  // name=""
  // clearName() {
  //   this.name="";
  // }
  

  value="";
  clearValue() {
    this.value="";
  }

  


  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.count++;
   this.countChange.emit(this.count);
 }
  


 
}
