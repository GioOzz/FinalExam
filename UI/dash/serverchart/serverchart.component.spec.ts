import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerchartComponent } from './serverchart.component';

describe('ServerchartComponent', () => {
  let component: ServerchartComponent;
  let fixture: ComponentFixture<ServerchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
