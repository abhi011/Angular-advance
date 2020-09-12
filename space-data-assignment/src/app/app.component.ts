import { Component } from '@angular/core';
import { Results } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';
  public pokemons: Array<Results>;
  search: string;

  exportPokemons(pokemons: Array<Results>): void {
    if (this.pokemons !== pokemons) {
      this.pokemons = pokemons;
    }
  }

  newPokemonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

}
