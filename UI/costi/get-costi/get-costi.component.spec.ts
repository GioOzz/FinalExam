import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCostiComponent } from './get-costi.component';

describe('GetCostiComponent', () => {
  let component: GetCostiComponent;
  let fixture: ComponentFixture<GetCostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
