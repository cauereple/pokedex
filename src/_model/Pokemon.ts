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
    classPart = "pokemon-card__color--".concat(pokemonType[0]).concat(pokemonType[1])
  } else {
    classPart = "pokemon-card__color--".concat(pokemonType[0])
  }


  const colors = {
    "bug": '#729f3f',
    "dark": '#707070',
    "dragon": '#53a4cf',
    "eletric": '#eed535',
    "fairy": '#fdb9e9',
    "fighting": '#d56723',
    "fire": '#fd7d24',
    "flying": 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
    "ghost": '#7b62a3',
    "grass": '#9bcc50',
    "ground": 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
    "ice": '#51c4e7',
    "normal": '#a4acaf',
    "poison": '#b97fc9',
    "psychic": '#f366b9',
    "rock": '#a38c21',
    "steel": '#9eb7b8',
    "water": '#4592c4',
  }

  return classPart;
}
