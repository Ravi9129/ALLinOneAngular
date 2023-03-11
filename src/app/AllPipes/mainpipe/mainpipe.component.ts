import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpipe',
  templateUrl: './mainpipe.component.html',
  styleUrls: ['./mainpipe.component.css']
})
export class MainpipeComponent {

  title: string = 'pipe Example' ; 
  toDate: Date = new Date(); 
  msg:string='welcome to angular';
  num: number= 9542.14554;
  per: number= .74142;
  cur: number= 175;
}
