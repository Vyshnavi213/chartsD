import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleD3ChartComponent } from './bubble-d3-chart.component';

describe('BubbleD3ChartComponent', () => {
  let component: BubbleD3ChartComponent;
  let fixture: ComponentFixture<BubbleD3ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleD3ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleD3ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
