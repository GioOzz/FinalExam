import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientiComponent } from './get-clienti.component';

describe('GetClientiComponent', () => {
  let component: GetClientiComponent;
  let fixture: ComponentFixture<GetClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
