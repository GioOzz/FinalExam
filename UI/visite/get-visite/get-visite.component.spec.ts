import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVisiteComponent } from './get-visite.component';

describe('GetVisiteComponent', () => {
  let component: GetVisiteComponent;
  let fixture: ComponentFixture<GetVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
