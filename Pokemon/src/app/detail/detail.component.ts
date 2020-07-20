import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PokemonDetails, Pokemon, TYPE_COLOURS} from 'src/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 
  //pokemon = new Pokemon();
  imgSrc:string;
  pokemonDetail:PokemonDetails;
  constructor(private pokemonService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.getImage(id);
    // alert(id);
    this.getDetails(id);

    // this.pokemonService.get(id)
    //   .then((pokemon) => { this.pokemon = pokemon; });
  }
  getDetails(id:number): void {
    this.pokemonService.get(id).subscribe((data: PokemonDetails) => {
      this.pokemonDetail = data;
      // this.pokemonDetail.name = data.name;
      // this.pokemonDetail.id = data.id;
      // pokemon.id = data.id;
      console.log("sfddddddddddddd "+data);

      this.pokemonDetail.types.forEach((eachType) => {
        console.log("eachType.type.name "+eachType.type.name);
       });

       console.log(this.pokemonDetail.types);
       

       


      // for(let a in this.pokemons.results)
      //   console.log(`${a} and ${this.pokemons.results[a]}`);
      
      

      // if (this.pokemons.results && this.pokemons.results.length) {
      //   // get pokemon details for every pokemon
      //   this.pokemons.results.forEach(pokemon => {
      //     // set pokemon id
      //     pokemon.id = pokemon.url.split('/')[
      //       pokemon.url.split('/').length - 2
      //     ];

      //     console.log(`pockemon ID  ${pokemon.id } and ${pokemon.name} and ${pokemon.details}`);
      //   });
      // }
    });
  }

getImage(id:number){
  this.imgSrc=this.pokemonService.getImage(id)
}


  _getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }
 // pokemon.name = data.name;
      // pokemon.id = data.id;
  
      // data.types.forEach((eachType) => {
      //   pokemon.types.push(eachType.type.name);
      // });
  
      // data.stats.forEach((eachStat) => {
      //   pokemon.stats.push({
      //     name: eachStat.stat.name,
      //     value: eachStat.base_stat
      //   });
      // });
}
