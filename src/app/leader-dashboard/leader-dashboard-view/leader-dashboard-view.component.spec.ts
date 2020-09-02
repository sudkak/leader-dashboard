import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDashboardViewComponent } from './leader-dashboard-view.component';

describe('LeaderDashboardViewComponent', () => {
  let component: LeaderDashboardViewComponent;
  let fixture: ComponentFixture<LeaderDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
