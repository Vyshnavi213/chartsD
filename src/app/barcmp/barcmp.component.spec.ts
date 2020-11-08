import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcmpComponent } from './barcmp.component';

describe('BarcmpComponent', () => {
  let component: BarcmpComponent;
  let fixture: ComponentFixture<BarcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
