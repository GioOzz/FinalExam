import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutVisiteComponent } from './post-put-visite.component';

describe('PostPutVisiteComponent', () => {
  let component: PostPutVisiteComponent;
  let fixture: ComponentFixture<PostPutVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
