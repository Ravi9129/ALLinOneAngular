import { Component } from '@angular/core';
import { Customer3 } from '../customer3';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component {
  title = 'ngOnChanges';
  message = '';
  customer: Customer3 = new Customer3();
  name= '';
  code= 0;
 
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
