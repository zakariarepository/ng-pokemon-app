import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    
  }

  selectPokemon(pokemonId : string){
    const pokemon : Pokemon|undefined= this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`vous avez choisi le pokemon ${pokemon.name}`);
      this.pokemonSelected=pokemon;
    }else{
      console.log(`il n'existe aucun pokmon avec ce numero`);
      this.pokemonSelected=pokemon;
    }
  }
}
