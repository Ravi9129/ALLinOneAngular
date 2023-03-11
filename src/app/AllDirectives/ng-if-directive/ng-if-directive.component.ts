import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent {

  // isValid: boolean = true;
  
  isValid: boolean = true;
  ChangeData(valid: boolean) {
    this.isValid = valid;
}
}
