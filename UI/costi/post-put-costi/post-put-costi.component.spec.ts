import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutCostiComponent } from './post-put-costi.component';

describe('PostPutCostiComponent', () => {
  let component: PostPutCostiComponent;
  let fixture: ComponentFixture<PostPutCostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutCostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutCostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
