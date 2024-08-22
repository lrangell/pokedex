import { Controller, Get, Param } from "@nestjs/common";

type Pokemon = {
  name: string;
  cover: string;
  cry: string;
  height: number;
  weight: number;
  stats: Record<string, number>;
};
function parsePokemon(pokemon: any): Pokemon {
  return {
    name: pokemon.name,
    cover: pokemon.sprites?.other?.dream_world?.front_default,
    cry: pokemon.cries.latest,
    height: pokemon.height,
    weight: pokemon.weight,
    stats: pokemon.stats.reduce(
      (acc, s) => ({ ...acc, [s.stat.name]: s.base_stat }),
      {},
    ),
  };
}

@Controller("pokemon")
export class PokemonController {
  baseURI = "https://pokeapi.co/api/v2";
  perPage = 21;

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
