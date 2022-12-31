import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartclientiComponent } from './chartclienti.component';

describe('ChartclientiComponent', () => {
  let component: ChartclientiComponent;
  let fixture: ComponentFixture<ChartclientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartclientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartclientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
