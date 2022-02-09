import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFORComponent } from './ng-for.component';

describe('NgFORComponent', () => {
  let component: NgFORComponent;
  let fixture: ComponentFixture<NgFORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
