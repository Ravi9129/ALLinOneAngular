import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  
  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: 'whitefiled', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: 'thane', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: 'kolkata', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'ranchi', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: 'mangolpuri', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ];

  
}

export interface Customer {
 
  customerNo: number;
  name:string ;
  address:string;
  city:string;
  state:string;
  country:string;
 
}
