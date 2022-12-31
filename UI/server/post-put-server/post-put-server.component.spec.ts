import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutServerComponent } from './post-put-server.component';

describe('PostPutServerComponent', () => {
  let component: PostPutServerComponent;
  let fixture: ComponentFixture<PostPutServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
