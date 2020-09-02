import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDashboardContainerComponent } from './leader-dashboard-container.component';

describe('LeaderDashboardContainerComponent', () => {
  let component: LeaderDashboardContainerComponent;
  let fixture: ComponentFixture<LeaderDashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderDashboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
