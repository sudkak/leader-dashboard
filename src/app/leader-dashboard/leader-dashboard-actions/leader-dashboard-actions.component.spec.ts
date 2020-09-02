import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDashboardActionsComponent } from './leader-dashboard-actions.component';

describe('LeaderDashboardActionsComponent', () => {
  let component: LeaderDashboardActionsComponent;
  let fixture: ComponentFixture<LeaderDashboardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderDashboardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDashboardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
