import { Component, Input } from '@angular/core';

import { Customer1 } from '../customer1';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent {

  @Input()
  customer1: Customer1 = new Customer1;
  
  constructor() {
    console.log("    GrandChildComponent:Contructed");
  }
 
  ngOnChanges() {
    console.log("    GrandChildComponent:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("    GrandChildComponent:ngOnInit");
  }
 
 
  ngDoCheck() {
    console.log("    GrandChildComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("    GrandChildComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("    GrandChildComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("    GrandChildComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("    GrandChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("    GrandChildComponent:ngOnDestroy");
  }
  
}

