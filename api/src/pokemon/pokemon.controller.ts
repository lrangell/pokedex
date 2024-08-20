import { Controller, Get, Param } from "@nestjs/common";

function parsePokemon(pokemon: any) {
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
  async find(@Param() params: any): Promise<any> {
    return await fetch(`${this.baseURI}/pokemon/${params.name}`)
      .then((x) => x.json())
      .then(parsePokemon);
  }

  @Get("all/:page")
  async list(@Param("page") page: any): Promise<any> {
    const offset = parseInt(page) * this.perPage;
    const names = await fetch(
      `${this.baseURI}/pokemon?limit=${this.perPage}&offset=${offset}`,
    )
      .then((x) => x.json())
      .then(({ results }) => results.map(({ name }) => name));

    return names;
  }
}
