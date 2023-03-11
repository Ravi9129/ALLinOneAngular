import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-nested-array',
  templateUrl: './ngfor-nested-array.component.html',
  styleUrls: ['./ngfor-nested-array.component.css']
})
export class NgforNestedArrayComponent {


  title: string = 'Top 5 Movies';

  employees = [
    {
      name: "Rahul", email: "rahul@gmail.com",
      skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: "Sachin", email: "sachin@gmail.com",
      skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
      ]
    },
    {
      name: "Laxmna", email: "laxman@gmail.com",
      skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
      ]
    }
  ]


  
}
