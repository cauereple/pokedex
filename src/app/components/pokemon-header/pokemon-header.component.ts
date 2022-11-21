import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.sass']
})
export class PokemonHeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  searchClicked: boolean = false;

  openSearch() {
    this.searchClicked = !this.searchClicked;
    this.focoInput()
  }

  focoInput() {
    this.renderer.selectRootElement('#search-input').focus();
  }

}
