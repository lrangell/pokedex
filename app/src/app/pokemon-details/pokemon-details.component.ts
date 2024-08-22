import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent {
  pokemon: any = null;
  @Input() name!: string;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.find(name!).subscribe((p) => (this.pokemon = p));
  }
}
