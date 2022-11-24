import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  showButton: boolean = false
  scrollHeight: number = 500

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY
    const scrollTop = this.document.documentElement.scrollTop
    this.showButton = (scrollY || scrollTop) > this.scrollHeight
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0
  }
}