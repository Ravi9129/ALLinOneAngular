import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.css']
})
export class NgStyleDirectiveComponent {

  AddButtonCSSStyles() {
    let CssStyles = {        
        'color':'red',
        'font-weight': 'bold',
        'font-size.px': 20
    };
    return CssStyles;
  }

  students: any[] = [
    {
        Name: 'Preety', Branch: 'CSE', Gender: 'Female'
    },
    {
        Name: 'Anurag', Branch: 'ETC', Gender: 'Male'
    },
    {
        Name: 'Priyanka', Branch: 'CSE',  Gender: 'Female'
    },
    {
        Name: 'Hina', Branch: 'ETC', Gender: 'Female'
    },
    {
        Name: 'Sambit', Branch: 'CSE', Gender: 'Male'
    }
  ]; 
  
}
