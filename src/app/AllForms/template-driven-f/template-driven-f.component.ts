import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-f',
  templateUrl: './template-driven-f.component.html',
  styleUrls: ['./template-driven-f.component.css']
})
export class TemplateDrivenFComponent {




//   title = 'Template driven forms';


//   countryList: country[] = [
//     new country("1", "India"),
//     new country('2', 'USA'),
//     new country('3', 'England')
//   ];

//   contact!: contact;

//   ngOnInit() {

//     this.contact = {
//       firstname: "Ravi",
//       lastname: "Rajput",
//       email: "ravi@gmail.com",
//       gender: "male",
//       isMarried: true,
//       country: "1",
//       address: { city: "noida", street: "delhi road", pincode: "244235" }
//     };

//   }

//   onSubmit(e:any) {
//     console.log(this.contact);
//   }

//   setDefaults() {
//     this.contact = {
//       firstname: "Sachin",
//       lastname: "Tendulkar",
//       email: "sachin@gmail.com",
//       gender: "male",
//       isMarried: true,
//       country: "2",
//       address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
//     };
//   }

//   changeCountry() {
//     this.contact.country = "1";
//   }

//   reset(contactForm: NgForm) {
//     contactForm.resetForm();
//   }



// }

// export class contact {
//   firstname!: string;
//   lastname!: string;
//   email!: string;
//   gender!: string;
//   isMarried!: boolean;
//   country!: string;
//   address!: {
//     city: string;
//     street: string;
//     pincode: string;
//   };
// }


// export class country {
//   id: string;
//   name: string;

//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }

title = 'Template driven forms';
 
  @ViewChild('contactForm', )
  contactForm!: NgForm;
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  contact!: contact;
 
  ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
 
    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
 
  }
 
  onSubmit(contactForm:any) {
    console.log(this.contactForm.value);
  }
 
  setDefaults() {
    this.contactForm.setValue(this.contact);
  }
 
  changeCountry() {
    this.contactForm.controls["country"].setValue("1");
  }
 
  patchValue() {
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
 
  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address= this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }
 
  reset() {
    this.contactForm.reset();
  }
 
  resetForm() {
    this.contactForm.resetForm();
  }
}
 
 
export class contact {
  firstname!: string;
  lastname!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}


