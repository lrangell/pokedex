import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsViewComponent } from './pokemons-view/pokemons-view.component';

export const routes: Routes = [
  { path: '', component: PokemonsViewComponent },
  { path: 'pokemon/:name', component: PokemonDetailsComponent },
];
