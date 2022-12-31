import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfittiComponent } from './get-profitti.component';

describe('GetProfittiComponent', () => {
  let component: GetProfittiComponent;
  let fixture: ComponentFixture<GetProfittiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProfittiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
