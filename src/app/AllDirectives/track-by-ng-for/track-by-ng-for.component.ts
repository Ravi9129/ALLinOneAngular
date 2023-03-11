import { Component,OnInit, TrackByFunction  } from '@angular/core';

@Component({
  selector: 'app-track-by-ng-for',
  templateUrl: './track-by-ng-for.component.html',
  styleUrls: ['./track-by-ng-for.component.css']
})
export class TrackByNgForComponent {

  title: string = "Top 5 Movies";
  
  
 
  mTitle:string="";
  mDirector:string="";
trackByFn!: TrackByFunction<{ title: string; director: string; }>;
 
  ngOnInit() {
    this.Refresh();
  }
 
  remove(i:any) {
    this.movies.splice(i,1);
  }
 
  // addMovie() {
  //   this.movies.push(this.movie)  
  //   this.mTitle=""
  //   this.mDirector=""
  // }
  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }

  movie:any = [{ title: this.mTitle, director: this.mDirector}]
  movies:any
  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }


  trackByFnMultipleFields(index: any, item: { title: any; director: any; }) {
    return item.title + item.director;
  }
}
 
export interface Movie {
  title: string;
  director: string;
  
}
