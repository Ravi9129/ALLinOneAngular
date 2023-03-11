import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodelchange',
  templateUrl: './ngmodelchange.component.html',
  styleUrls: ['./ngmodelchange.component.css']
})
export class NgmodelchangeComponent {

  nameChanged(arg: string) {
    console.log("modelchanged " + arg);
  }
  

  // firstName
  // ;
   
  // firstNameChanged(arg: string) {
  //   console.log(
  //       "firstNameChanged  argument " + arg + "  component " + this.firstName
  //   );
  // }

  // lastName
  // ;
   
  // lastNameChanged(arg: string) {
  //   console.log(
  //       "lastNameChanged  argument " + arg + "  component " + this.lastName
  //   );
  // }  

  name1Changed(arg: { target: { value: string; }; }) {
    console.log("name1Changed " + arg.target.value);
    console.log(arg);
   }
    
   country1Changed(arg: { target: { value: string; }; }) {
     console.log("country1Changed " + arg.target.value);
     console.log(arg);
   }

  
  
}
