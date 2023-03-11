import { Component } from '@angular/core';
import { Customer2 } from '../customer2';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component {

  title = 'ngOnChanges';
  message = '';
  customer: Customer2 = new Customer2();
  name= '';
  code= 0;
 
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
