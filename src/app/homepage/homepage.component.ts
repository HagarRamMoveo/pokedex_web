import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  pokemonData: IPokemon[] = []
  filteredPokemonData: IPokemon[] = [];
  searchInput:string = '';
  abilites:any[] = [[]];
  uniqueArray: string[] = [];
  constructor(private _pokemonService: PokemonService, public modalService: NgbModal) { 
  }

  ngOnInit() {
    this._pokemonService.fetchPokemons().toPromise()
      .then((response: any) => {
        this.pokemonData = response.results;
        return this._pokemonService.bringPokemonData(this.pokemonData);
      })
      .then((filteredData: IPokemon[]) => {
        this.filteredPokemonData = filteredData;
        this.pokemonData = filteredData;
        this.abilites = this.pokemonData.map((types:IPokemon)=>{
          return types.abilities;
        })
        this.uniqueArray = Array.from(new Set(this.abilites.flatMap(item => item)));
        console.log(this.pokemonData);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  searchPokemon(searchText: string) {
    this.filteredPokemonData = this.pokemonData.filter((pokemon: IPokemon) => {
      return pokemon.name.toLowerCase().includes(searchText.toLowerCase());    
    });
  }
  selectPokemonType(event: Event) {
    const selected = (<HTMLInputElement>event.target).value;
    if (this.pokemonData)  {
      this.filteredPokemonData = this.pokemonData.filter((pokemon: IPokemon) => {
      return pokemon.abilities?.includes(selected);
      });
    }
  
  }
  }

