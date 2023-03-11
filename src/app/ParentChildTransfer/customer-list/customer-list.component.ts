import { Component } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]
 
  selectedCustomer:Customer = new Customer();
  
 
  constructor() { }
 
  ngOnInit() {
  }
 
  showDetails(customer:Customer) {
    this.selectedCustomer=Object.assign({},customer)
  }
  
  update(customer:Customer) {
    console.log(customer)
    const cust:any=this.customers.find(e => e.customerNo==customer.customerNo)
    Object.assign(cust,customer)
    alert("Customer Saved")
  }
  
}
