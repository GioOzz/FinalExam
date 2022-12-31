import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrdiniComponent } from './get-ordini.component';

describe('GetOrdiniComponent', () => {
  let component: GetOrdiniComponent;
  let fixture: ComponentFixture<GetOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrdiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
