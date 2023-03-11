import { Component, Input, SimpleChanges } from '@angular/core';
import { Customer3 } from '../customer3';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component {

  @Input()
  message!: string;
  @Input()
  customer!: Customer3;
  
  changelog: string[] = [];
  oldCustomer: Customer3= new Customer3();
  DocheckCount = 0;

  ngOnInit() {
      console.log('OnInit');
      this.oldCustomer = Object.assign({}, this.customer);
  }

  ngDoCheck() {
      console.log('Docheck');
      this.DocheckCount++;
      if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
          const to  = JSON.stringify(this.customer);
          const from = JSON.stringify(this.oldCustomer);
          const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
          this.changelog.push(changeLog);

          this.oldCustomer = Object.assign({}, this.customer);
      }
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('OnChanges');
      console.log(JSON.stringify(changes));

      // tslint:disable-next-line:forin
      for (const propName in changes) {
           const change = changes[propName];
           const to  = JSON.stringify(change.currentValue);
           const from = JSON.stringify(change.previousValue);
           const changeLog = `${propName}: changed from ${from} to ${to} `;
           this.changelog.push(changeLog);
      }
  }

}
