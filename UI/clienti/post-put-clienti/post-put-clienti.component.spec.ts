import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutClientiComponent } from './post-put-clienti.component';

describe('PostPutClientiComponent', () => {
  let component: PostPutClientiComponent;
  let fixture: ComponentFixture<PostPutClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
