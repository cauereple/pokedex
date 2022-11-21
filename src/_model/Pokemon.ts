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

export function getPokemonType(pokemon: Pokemon) {

  const pokemonType = pokemon.types
  let classPart = ''

  if(pokemonType.length > 1) {
    classPart = `pokemon-card__color--${pokemonType[0]}${pokemonType[1]}`
    // classPart = "pokemon-card__color--".concat(pokemonType[0]).concat(pokemonType[1])
  } else {
    classPart = `pokemon-card__color--${pokemonType[0]}`
    // classPart = "pokemon-card__color--".concat(pokemonType[0])
  }

  return classPart;
}
