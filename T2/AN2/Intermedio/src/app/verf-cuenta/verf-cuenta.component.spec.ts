import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfCuentaComponent } from './verf-cuenta.component';

describe('VerfCuentaComponent', () => {
  let component: VerfCuentaComponent;
  let fixture: ComponentFixture<VerfCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
