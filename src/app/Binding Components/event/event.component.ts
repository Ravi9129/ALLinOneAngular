import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  title="ravi";
  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  
  clickCount1=0;
  clickMe1() {
    this.clickCount++;
  }
  
  value = "";
  handleInput(event:any) {
    this.value = (event.target as HTMLInputElement).value;
  }


  val="";
handleInput1(element:any) {
  this.val=element.value;
}
  

title1 = "Event Binding in Angular";
value1 = "";
value2 = "";
value3 = "";
value4 = "";

}
