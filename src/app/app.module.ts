import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/_services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './components/pokemon-footer/pokemon-footer.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonHeaderComponent,
    PokemonFooterComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
