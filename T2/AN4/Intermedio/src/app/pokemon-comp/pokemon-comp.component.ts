
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-pokemon-comp',
  templateUrl: './pokemon-comp.component.html',
  styleUrls: ['./pokemon-comp.component.css']
})
export class PokemonCompComponent implements OnInit {
  @Input() pokemon : Pokemon | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

