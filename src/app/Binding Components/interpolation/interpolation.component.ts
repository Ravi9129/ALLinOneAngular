import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
max(arg0: number,arg1: number) {
throw new Error('Method not implemented.');
}
  

  title='Ravi s course';
  firstname='Ravi';
  lastname='Rajput';
  giveMeRed='red flowers';
  itemImageUrl='';
  
  // getFirstName(fullname){
  //   return fullname.split('').map(n=>n[0]).join('')
    
  // }

  // max(first: number, second: number): number {
  //   return Math.max(first, second);
  // }
// //Component
// items= [
//   new item(1, 'Mobile'),
//   new item(2, 'Laptop'),
//   new item(3, 'Desktop'),
//   new item(4, 'Printer')
// ]

// class item {
// code:string
// name:string

// constructor(code,name) {
//   this.code=code;
//   this.name=name
// }
  

// }
}