import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderDashboardRoutingModule } from './leader-dashboard-routing.module';
import { LeaderDashboardContainerComponent } from './leader-dashboard-container/leader-dashboard-container.component';
import { LeaderDashboardViewComponent } from './leader-dashboard-view/leader-dashboard-view.component';
import { LeaderDashboardActionsComponent } from './leader-dashboard-actions/leader-dashboard-actions.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LeaderDashboardContainerComponent, LeaderDashboardViewComponent, LeaderDashboardActionsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    LeaderDashboardRoutingModule
  ]
})
export class LeaderDashboardModule { }
