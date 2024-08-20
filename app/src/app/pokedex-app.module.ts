import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), PokemonCardComponent],
  providers: [PokemonService, provideHttpClient(withFetch())],
  declarations: [PokedexAppComponent],
  bootstrap: [PokedexAppComponent],
  exports: [PokemonCardComponent],
})
export class PokedexAppModule {}
