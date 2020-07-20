import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PokeAPI } from 'src/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


//@ViewChild("f") submitForm:NgForm;
export class HeaderComponent implements OnInit {
  
  @Output() searchChange = new EventEmitter();
  isAdmin:boolean;
  errorP:string;
  searchP:string;
  isAdminStorage:string;
  oneUrl='https://pokeapi.co/api/v2/pokemon';
  // oneUrl='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964';
  @ViewChild('searchPokemon') search1:NgForm;
  search: any;
  pokemons: PokeAPI;
  detail: boolean=false;
  id: string;
  constructor(private userService:UserService, private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.isAdmin=this.userService.isAdmin;
    //this.userService.fetchPokemon();
    // localStorage.setItem("isAdmin","false");
    this.isAdminStorage=localStorage.getItem("isAdmin");
    if(this.isAdminStorage === 'false')
    this.userService.isAdmin=false;
    else
    this.userService.isAdmin=true;

    this.isAdmin=this.userService.isAdmin;
    //searchPokemin()
  }


  searchPokemin(oneUrl){
   
    this.errorP='';
    console.log(this.searchP);
    var letters = /^[A-Za-z]+$/;
    if(this.searchP ===undefined || this.searchP===''){
    this.errorP="Enter search Value";
    return false;
    }
    if(!this.searchP.match(letters) || this.searchP.length<3)
       this.errorP="Search key should be of atleast length 3 and all string value";
      //  if (search === '') {
      //   this.search = search;
      // }
      this.searchP=this.searchP.toLowerCase();
      this.userService.getPokemon(oneUrl).subscribe((data: PokeAPI)=>{
        this.pokemons = data;
        console.log(this.pokemons);
        for(let pokemon of this.pokemons.results){
          pokemon.name=pokemon.name.toLowerCase();
          if(pokemon.name==this.searchP){
            pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
            ];
            this.id=pokemon.id;
          
        }
          // alert(pokemon.name)
         
      }
      if(this.id !== undefined)
      this.router.navigateByUrl(`/details/${this.id}`);
      else
      this.errorP="Enter Pokenom name correctly";


      });

      // this.router.navigateByUrl(`/dashboard/ProjectShipment/${this.prj}`);
      // this.router.navigateByUrl(`/details/${this.id}`);


      // this.searchChange.emit(this.searchP);
  }




  // searchEvent(search): void {
  //   // check for cleared search
  //   if (search === '') {
  //     this.search = search;
  //   }
  //   this.searchChange.emit(this.search);
  // }

  // fetchPokemon(){

  //   this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0')
  //   .subscribe((data=>{
  //     const pokemonList=data;

  //     for (let key in pokemonList){
  //       if(key=='results'){
  //       let results=pokemonList[key];
  //       console.log(results);
        
  //       }

  //     }
    
      
  //   }))


  // }

}
