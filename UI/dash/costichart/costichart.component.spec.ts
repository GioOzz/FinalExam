import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostichartComponent } from './costichart.component';

describe('CostichartComponent', () => {
  let component: CostichartComponent;
  let fixture: ComponentFixture<CostichartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostichartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
