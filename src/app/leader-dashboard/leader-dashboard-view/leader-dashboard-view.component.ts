import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-leader-dashboard-view',
  templateUrl: './leader-dashboard-view.component.html',
  styleUrls: ['./leader-dashboard-view.component.scss']
})
export class LeaderDashboardViewComponent implements OnInit {

  members:Member[] = [ 
    new Member('Emma',0),
    new Member('Noah',0),
    new Member('James',0),
    new Member('William',0),
    new Member('Olivia',0),
    new Member('Nancy',0)
  ]

  constructor() { }

  ngOnInit() {
  }

  addPoints(member:Member){
    member.points += 1;
    this.sortMembers();
  }

  removePoints(member:Member){
     member.points ==0 ? 0 : member.points -=1;
     this.sortMembers();
  }

  sortMembers(){
    console.log(this.members)
    this.members.sort((a,b) => a.points !== b.points ? b.points-a.points: this.sortyByNames(a.name,b.name))
  }

 private sortyByNames(a:string,b:string){
    const aName = a.toUpperCase();
    const bName = b.toUpperCase();

    if( aName < bName )
      return -1
    if ( aName > bName) 
       return 1
    return 0
    }

}
