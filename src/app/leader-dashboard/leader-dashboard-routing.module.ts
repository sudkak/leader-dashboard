import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderDashboardContainerComponent } from './leader-dashboard-container/leader-dashboard-container.component';


const routes:Routes = [
  { path: 'leader-dashboard', component: LeaderDashboardContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderDashboardRoutingModule { }
