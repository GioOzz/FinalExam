import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinichartComponent } from './ordinichart.component';

describe('OrdinichartComponent', () => {
  let component: OrdinichartComponent;
  let fixture: ComponentFixture<OrdinichartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinichartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
