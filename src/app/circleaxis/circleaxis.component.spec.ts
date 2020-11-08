import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleaxisComponent } from './circleaxis.component';

describe('CircleaxisComponent', () => {
  let component: CircleaxisComponent;
  let fixture: ComponentFixture<CircleaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
