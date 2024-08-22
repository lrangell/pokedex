import { Component } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {}

  search(name: string) {
    this.pokemonService.find(name).subscribe(async (p) => {
      if (p) {
        await this.router.navigate(['/pokemon', name]);
        window.location.reload();
      } else {
        alert('Pokemon not found');
      }
    });
  }
}
