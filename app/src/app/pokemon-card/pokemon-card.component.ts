import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
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
