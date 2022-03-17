import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCompComponent } from './pokemon-comp.component';

describe('PokemonCompComponent', () => {
  let component: PokemonCompComponent;
  let fixture: ComponentFixture<PokemonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
