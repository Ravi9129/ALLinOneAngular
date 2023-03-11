import { Component, Input } from '@angular/core';

import { Customer1 } from '../customer1';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input() message:string | undefined
 
  customer1:Customer1 = new Customer1()
 
 
constructor() {
    console.log("  Child2Component:Contructed");
  }
 
  ngOnChanges() {
    console.log("  Child2Component:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("  Child2Component:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("  Child2Component:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("  Child2Component:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("  Child2Component:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("  Child2Component:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("  Child2Component:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("  Child2Component:ngOnDestroy");
  }
  
}
