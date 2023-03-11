import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
 title: string = 'Angular Custom Pipe Example' ;
  celsius!: number;
    Fahrenheit!: number;   
}
