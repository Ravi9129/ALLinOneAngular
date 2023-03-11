import { Component } from '@angular/core';

import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => { observer.next("90000") }, 1000);
  })
  
  obsValue1 = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => { 
      console.log("Returns value")
      observer.next("1000") 
    }, 5000);
  }).pipe(shareReplay());
  
}
