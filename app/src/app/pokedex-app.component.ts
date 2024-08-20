import { Component } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex-app.component.html',
})
export class PokedexAppComponent {
  pokemons: any;
  constructor(private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit() {
    this.pokemonService.all(1).subscribe((x) => (this.pokemons = x));
  }
}
