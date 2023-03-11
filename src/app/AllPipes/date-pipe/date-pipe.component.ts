import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent {

  toDate: Date = new Date();
  numDate=1590319189931;
  strDate="Sun May 24 2020 19:16:23";
  
}
