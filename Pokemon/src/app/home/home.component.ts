import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state={
    preBtn:false,
    nextBtn:false,
    nextUrl:null,
   preUrl:null,
   oneUrl:'https://pokeapi.co/api/v2/pokemon'
  }
  pokemonList:any;
  pokemons: PokeAPI;
  pokemonsLoaded: boolean;
  @Output() exportPokemons = new EventEmitter();
  // preBtn: boolean;
  constructor(private pokemonService: UserService) { }
  
  ngOnInit(): void 
  {
    //this.pokemonService.fetchPokemon();
    this.pokemonsLoaded = false;
    this.getPokemons(this.state.oneUrl);


    if(this.state.preUrl==null || this.state.preUrl==undefined)
    this.state.preBtn=false;
    
  }



getPokemons(oneUrl:any): void {
    this.pokemonService.getPokemon(oneUrl).subscribe((data: PokeAPI) => {
      this.pokemons = data;
      ;
      
      this.state.nextUrl=data.next;

      if(data.next==null){
        this.state.nextBtn=true;
      }
      this.state.preUrl=data.previous;
      console.log("data.previous "+data.previous);
      
      if(data.previous!=null){
        this.state.preBtn=true;
      }

      console.log("sfddddddddddddd "+data);
      for(let a of this.pokemons.results)
        console.log(`${a.id}`);
      
      

      if (this.pokemons.results && this.pokemons.results.length) {
        // get pokemon details for every pokemon
        this.pokemons.results.forEach(pokemon => {
          // set pokemon id
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];

          console.log(`pockemon ID  ${pokemon.id } and ${pokemon.name} and ${pokemon.details}`);
          

          this.getPokemonDetails(pokemon);
          this.getPokemonSpeciesDetails(pokemon);
        });
      }
    });
  }

  getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details) => {
        pokemon.details = details;
        // alert(details)
        console.log("details "+ pokemon.details);
        for (let a in details){
        
          if(a==='sprites')
          console.log(`this is a${a} ${details[a].front_default}`);
          
        }
        
        
        // when last pokemon details have been loaded
        // send pokemons to header component
        // if (pokemon.id === '151') {
          this.pokemonsLoaded = true;
          // this.exportPokemons.emit(this.pokemons.results);
        //}
      });
  }

  getPokemonSpeciesDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonSpecies(pokemon.name)
      .subscribe((species: any) => {
        const entries = species.flavor_text_entries;
        if (entries) {
          entries.some(flavor => {
            if (flavor.language.name === 'en') {
              pokemon.description = flavor.flavor_text;
            }
          });
        }
      });
  }
  _getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }

  checkThePokemon(event:any){
    alert(event.value);
    
  }

}
