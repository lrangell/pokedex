import { Component, inject } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { from, map, tap, Observable, of } from 'rxjs';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex-app.component.html',
})
export class PokedexAppComponent {
  pokemons: any = [];
  page = 1;
  private route = inject(ActivatedRoute);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}
}
