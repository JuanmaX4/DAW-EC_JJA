import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemons-comp',
  templateUrl: './lista-pokemons-comp.component.html',
  styleUrls: ['./lista-pokemons-comp.component.css'],
  providers: [PokemonService]
})
export class ListaPokemonsCompComponent implements OnInit {
 
  public selectType: string = '';
  public pokemons : Array<Pokemon>

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectType = event.target.value;
  }


 
  constructor(private _pokemonService : PokemonService) { 
    this.pokemons = [
       
    ]
  }

  ngOnInit(): void {
  
     
    } 
  
    
  }
  
  
