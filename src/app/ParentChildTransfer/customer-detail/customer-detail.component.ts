import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {


  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>(); 
    
  constructor() { }
 
  ngOnInit() {
  }
 
  update() {
    this.customerChange.emit(this.customer);
  }
  
}
