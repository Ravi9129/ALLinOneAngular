import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, OnDestroy {

  constructor() {
    console.log('ChildComponent:Constructor');
  }
 
  ngOnInit() {
    console.log('ChildComponent:OnInit');
  }
 
  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }

}
