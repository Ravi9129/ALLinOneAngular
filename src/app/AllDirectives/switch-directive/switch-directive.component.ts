import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent {

  num: number= 0;

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
  selectedValue1: string= 'One';
  selectedValue2: string= 'One';
  selectedValue3: string= 'One';
  selectedValue4: string= 'One';


  
}
export interface item{
  name:string;
  val:number;
}
