import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent {

  AddCSSClasses(flag:string) {
    let Cssclasses;
    if(flag == "type1")
    {
      Cssclasses = {
        'one' : true,
        'two' : true
      }
    }
    else
    {
      Cssclasses = {
        'four' : true,
        'five' : true
      }
    }
    return Cssclasses;
}
  
}
