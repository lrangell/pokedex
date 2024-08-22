import { Controller, Get, Param } from "@nestjs/common";

type Pokemon = {
  name: string;
  cover: string;
};
function parsePokemon(pokemon: any): Pokemon {
  return {
    name: pokemon.name,
    cover: pokemon.sprites?.other?.dream_world?.front_default,
  };
}

@Controller("pokemon")
export class PokemonController {
  baseURI = "https://pokeapi.co/api/v2";
  perPage = 20;

  @Get(":name")
  async find(@Param("name") name: string): Promise<Pokemon | null> {
    return await fetch(`${this.baseURI}/pokemon/${name}`)
      .then((x) => x.json())
      .then(parsePokemon)
      .catch(() => null);
  }

  @Get("all/:page")
  async list(@Param("page") page: any): Promise<string[]> {
    const offset = parseInt(page) * this.perPage;
    const names = await fetch(
      `${this.baseURI}/pokemon?limit=${this.perPage}&offset=${offset}`,
    )
      .then((x) => x.json())
      .then(({ results }) => results.map(({ name }) => name));

    return names;
  }
}
