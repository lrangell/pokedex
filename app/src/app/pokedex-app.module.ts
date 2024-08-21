import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PokemonsViewComponent } from './pokemons-view/pokemons-view.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PokemonCardComponent,
    PokemonsViewComponent,
  ],
  providers: [PokemonService, provideHttpClient(withFetch())],
  declarations: [PokedexAppComponent],
  bootstrap: [PokedexAppComponent],
  exports: [PokemonCardComponent, PokemonsViewComponent, HeaderComponent],
})
export class PokedexAppModule {}
