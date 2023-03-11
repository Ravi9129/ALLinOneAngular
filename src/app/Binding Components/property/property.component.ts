import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  title="Ravi rajput"
  
  //Example 1
  isDisabled= false;

  
evilText = 'Template <script>alert("You are hacked")</script> Syntax';
  

closeLabel="close";
getColspan() {
   return "2"
}

text1="The <b>Angular</b> is printed in bold"
text2="<p>This is first para</p><p>This is second para</p> "


itemImageUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"

color='red';




}
