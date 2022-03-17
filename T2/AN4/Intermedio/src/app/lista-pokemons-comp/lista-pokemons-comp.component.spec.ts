import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonsCompComponent } from './lista-pokemons-comp.component';

describe('ListaPokemonsCompComponent', () => {
  let component: ListaPokemonsCompComponent;
  let fixture: ComponentFixture<ListaPokemonsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPokemonsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
