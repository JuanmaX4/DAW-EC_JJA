
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { ListaPokemonsCompComponent } from './lista-pokemons-comp/lista-pokemons-comp.component';
import { PokemonCompComponent } from './pokemon-comp/pokemon-comp.component';
import { HighlightDirective } from './highlight.directive';
import { PokemonService } from '../services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeCompComponent,
    ListaPokemonsCompComponent,
    PokemonCompComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
