import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionComponenteComponent } from './comunicacion-componente.component';

describe('ComunicacionComponenteComponent', () => {
  let component: ComunicacionComponenteComponent;
  let fixture: ComponentFixture<ComunicacionComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
