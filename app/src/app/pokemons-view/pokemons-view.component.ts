import { Component } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokemons-view',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemons-view.component.html',
})
export class PokemonsViewComponent {
  pokemons: any = [];
  page = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMore();
  }

  scrollTo(id: string) {
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  loadMore() {
    this.page = this.page + 1;
    this.pokemonService.all(this.page).subscribe(
      //@ts-ignore
      (pokemons) => (this.pokemons = [...this.pokemons, ...pokemons]),
    );
  }
  ngAfterViewChecked() {
    if (this.page > 1) this.scrollTo('loadMore');
  }
}
