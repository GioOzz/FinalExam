import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutOrdiniComponent } from './post-put-ordini.component';

describe('PostPutOrdiniComponent', () => {
  let component: PostPutOrdiniComponent;
  let fixture: ComponentFixture<PostPutOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPutOrdiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
