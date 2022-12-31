import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServerComponent } from './get-server.component';

describe('GetServerComponent', () => {
  let component: GetServerComponent;
  let fixture: ComponentFixture<GetServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
