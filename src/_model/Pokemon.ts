import { Type } from "./Type";

export interface Pokemon {
    image: string;
    number: number;
    name: string;
    types: Type[];
  }

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`
}

export function getPokemonNumber(pokemon: Pokemon): string {
    return pokemon.number.toString().padStart(3, '0')
}