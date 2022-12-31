import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordinichart2Component } from './ordinichart2.component';

describe('Ordinichart2Component', () => {
  let component: Ordinichart2Component;
  let fixture: ComponentFixture<Ordinichart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ordinichart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ordinichart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
