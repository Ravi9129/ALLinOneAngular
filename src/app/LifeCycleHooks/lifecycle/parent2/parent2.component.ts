import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  name = "Angular " + VERSION.major;
 
  message = "Hello";
  content = "Hello";
  hideChild=false;
 
  constructor() {
    console.log("Parent2Component:Contructed");
  }
 
  ngOnChanges() {
    console.log("Parent2Component:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("Parent2Component:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("Parent2Component:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("Parent2Component:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("Parent2Component:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("Parent2Component:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("Parent2Component:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("Parent2Component:ngOnDestroy");
  }

  
}
