import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutProfittiComponent } from './post-put-profitti.component';

describe('PostPutProfittiComponent', () => {
  let component: PostPutProfittiComponent;
  let fixture: ComponentFixture<PostPutProfittiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutProfittiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutProfittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
