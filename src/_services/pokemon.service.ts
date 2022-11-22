import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
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

  allPokemons = "/pokemon?limit=905"
  firstGeneration = "/pokemon?limit=151"
  secondGeneration = "/pokemon?limit=100&offset=151"
  thirdGeneration = "/pokemon?limit=135&offset=251"
  fourthGeneration = "/pokemon?limit=107&offset=386"
  fifthGeneration = "/pokemon?limit=156&offset=493"
  sixthGeneration = "/pokemon?limit=72&offset=649"
  seventhGeneration = "/pokemon?limit=88&offset=721"
  eighthGeneration = "/pokemon?limit=96&offset=809"


  getPokemons() {
    return this.httpClient.get<any>(`${this.baseUrl}${this.firstGeneration}`).pipe(
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