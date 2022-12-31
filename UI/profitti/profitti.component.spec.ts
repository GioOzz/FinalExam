import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfittiComponent } from './profitti.component';

describe('ProfittiComponent', () => {
  let component: ProfittiComponent;
  let fixture: ComponentFixture<ProfittiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfittiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
