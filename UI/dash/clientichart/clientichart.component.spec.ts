import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientichartComponent } from './clientichart.component';

describe('ClientichartComponent', () => {
  let component: ClientichartComponent;
  let fixture: ComponentFixture<ClientichartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientichartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
