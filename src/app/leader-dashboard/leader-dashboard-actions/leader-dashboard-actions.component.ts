import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-leader-dashboard-actions',
  templateUrl: './leader-dashboard-actions.component.html',
  styleUrls: ['./leader-dashboard-actions.component.scss']
})
export class LeaderDashboardActionsComponent implements OnInit {

  @Input() member:Member
  @Output() addPoints = new EventEmitter();
  @Output() removePoints = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPoints(){
     this.addPoints.emit(this.member);
  }

  onRemovePoints(){
     this.removePoints.emit(this.member);
  }


}
