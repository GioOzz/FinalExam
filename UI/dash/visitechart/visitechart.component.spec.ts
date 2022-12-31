import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitechartComponent } from './visitechart.component';

describe('VisitechartComponent', () => {
  let component: VisitechartComponent;
  let fixture: ComponentFixture<VisitechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
