
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pokemon } from 'src/models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';



@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css'],

})
export class HomeCompComponent implements OnInit {
  
  @Input() pokemon : Pokemon | undefined;
   selectType: string = '';
   pokemons : Array<Pokemon> 
   
   constructor(private _pokemonService : PokemonService) { 
    this.pokemons = [
        new Pokemon ("","")
    ]
  }
  
   selectChangeHandler (event: any) {
    
    this.selectType = event.target.value;
    console.log(event.target.value)
    if (this.selectType === "fire") {
      this._pokemonService.getPokemonFire().subscribe(
        response => {
          //console.log(response);
          for (let i = 0; i < response.pokemon.length; i++) {
            //console.log(response.pokemon[i].pokemon.name)
            //console.log(response.pokemon[i].pokemon.url)
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          ) 
            
          }
        }, 
        error => {
          console.log(error)
        }
      )
      
    }
    if (this.selectType === "water") {
      this._pokemonService.getPokemonWater().subscribe(
        response => {
          //console.log(response);
          for (let i = 0; i < response.pokemon.length; i++) {
            //console.log(response.pokemon[i].pokemon.name)
            //console.log(response.pokemon[i].pokemon.url)
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          ) 
            
          }
        }, 
        error => {
          console.log(error)
        }
      )
    }
    if (this.selectType === "grass") {
      this._pokemonService.getPokemonGrass().subscribe(
        response => {
          //console.log(response);
          for (let i = 0; i < response.pokemon.length; i++) {
            //console.log(response.pokemon[i].pokemon.name)
            //console.log(response.pokemon[i].pokemon.url)
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          ) 
            
          }
        }, 
        error => {
          console.log(error)
        }
      )
      
    }
  }



  ngOnInit(): void {
  }
 

}
