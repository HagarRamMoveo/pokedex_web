import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  PokemoncardComponent } from '../pokemoncard/pokemoncard.component';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  // Pokemon:string = ''
  // pokemonData: IPokemon[] = [];
  // filteredPokemonData: IPokemon[] = [];
  // selectedPokemon: IPokemon | null = null;
  // searchInput:string = '';
  constructor(private http: HttpClient, private _pokemonService: PokemonService, private _PokemoncardComponent : PokemoncardComponent){
   
  }
  // @Input()
  // selectName!: IPokemon[];

  // @Output() searchData = new EventEmitter<string>();

  // filterData(searchInput:string){
  // this.searchData.emit(this.searchInput);
  // }

}