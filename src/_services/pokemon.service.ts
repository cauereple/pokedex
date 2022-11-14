import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/_model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //public pokemons = new ReplaySubject<Pokemon[]>(1); // o ReplaySubject toda vez que alguém tentar pegar informação dele, ele vai repetir a última informação que está lá

  public pokemons: Pokemon[] = [];
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { 
    this.getPokemons()
  }  

  getPokemons() {
    return this.httpClient.get<any>(`${this.baseUrl}/pokemon?limit=151`).pipe(
        map(value => value.results),
        map((value: any) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url))
          );
        }),
        mergeMap(value => value),
        ).subscribe((pokemonApiResult: any) => this.pokemons[pokemonApiResult.id] = {
            image: pokemonApiResult.sprites.front_default,
            number: pokemonApiResult.id,
            name: pokemonApiResult.name,
            types: pokemonApiResult.types.map((t: any) => t.type.name),
          })
  }
}