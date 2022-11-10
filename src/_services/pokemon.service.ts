import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from 'src/_model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //public pokemons = new ReplaySubject<Pokemon[]>(1); // o ReplaySubject toda vez que alguém tentar pegar informação dele, ele vai repetir a última informação que está lá

  public pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) { 

      const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/'; 

      this.httpClient.get<any>(allPokemonsUrl).pipe(
        map(value => value.results),
        map((value: any) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url))
          );
        }),
        mergeMap(value => value),
        ).subscribe((results: any) => this.pokemons[results.id] = {
            image: results.sprites.front_default,
            number: results.id,
            name: results.name,
            types: results.types.map((t: any) => t.type.name),
          })
    }
}
