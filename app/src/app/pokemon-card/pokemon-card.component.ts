import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  pokemon: any;
  @Input() name!: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = null;
  }

  ngOnInit() {
    this.pokemonService.find(this.name).subscribe((p) => (this.pokemon = p));
  }
}
