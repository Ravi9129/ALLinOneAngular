import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, OnDestroy {
  displayChild = true;
 
  constructor() {
    console.log('AppComponent:Constructor');
  }
 
  toggle() {
    this.displayChild = !this.displayChild;
  }
 
  ngOnInit() {
    console.log('AppComponent:OnInit');
  }
 
 
  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }

}
