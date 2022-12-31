import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfittichartComponent } from './profittichart.component';

describe('ProfittichartComponent', () => {
  let component: ProfittichartComponent;
  let fixture: ComponentFixture<ProfittichartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfittichartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfittichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
