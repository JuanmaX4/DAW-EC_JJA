import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Results } from 'src/interfaces';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();

  abilities: Array<string>;
  types: Array<string>;
  pokemonList: Array<Results>;
  search: string;
  currentType: string;
  currentAbilities: Array<string>;

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
      this.pokemonList.forEach(pokemon => {
        this.setPokemonTypes(pokemon);
      });
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.types = [];
  }

  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit('');
    }
  }

  setPokemonTypes(pokemon: Results): void {
    if (pokemon) {
      pokemon.details.types.forEach(type => {
        const typeName = type.type.name;
        if (!this.types.includes(typeName)) {
          this.types.push(typeName);
          this.types.sort();
        }
      });
    }
  }
}
