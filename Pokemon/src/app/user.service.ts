import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokeAPI, PokemonDetails ,Pokemon} from 'src/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  pokeAPI: any;
  pokeSpeciesAPI: any;
  pokemonUrl:any;
  pokeMonlist:any;
  results=[];
  isAdmin:boolean=false;
  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
    this.pokeSpeciesAPI = environment.pokemonSpeciesURL;
  }

  /**
   * Returns original 151 pokemon
   */
 
   
   static count:number=0;
  getPokemon(oneUrl): Observable<PokeAPI> {
    if(oneUrl.includes('limit=20'))
    oneUrl=oneUrl.replace('limit=20','limit=30')



    
//     if(this.offSeetCount==0){
//       this.state.preBtn=false;
//     }
//     UserService.count+=1;
// alert(`${this.state.nextBtn} ${this.state.preBtn}`);
//     if(this.state.nextBtn){
//       this.state.oneUrl=this.state.nextUrl;
//       console.log("this.oneUrl "+ this.state.oneUrl);
      
//     }
//       if(this.state.preBtn){
//         this.state.oneUrl=this.state.preUrl;
//         console.log("this.oneUrl "+ this.state.oneUrl);
//       }
     
    return this.http
      .get<PokeAPI>(oneUrl);
  }


  toggleIsAdmin(bool:boolean){
    return bool == true?false:true;
  }

  getPokemonDetails(name): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
  }

  getPokemonSpecies(name): Observable<any> {
    return this.http
      .get<any>(`${this.pokeSpeciesAPI}/${name}`)
    
  }

  get(id: number):Observable<PokemonDetails> {
  
    return this.http.get<PokemonDetails>("https://pokeapi.co/api/v2/pokemon/" + id);
    
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




  // fetchPokemon(){

  //   this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0')
  //   .subscribe((data=>{
  //     const pokemonResults=data;

  //     for (let key in pokemonResults){
  //       if(key=='results'){
  //       this.results=pokemonResults[key];
  //       console.log(this.results);
  //       this.fetchPokemonImage();
  //       console.log("here ");
  //       this.pokemonUrl=this.results[0].url;
  //       console.log(this.pokemonUrl);
        
  //       return this.results;
        
        
  //        }
  //       }
    
      
  //   }))


  // }

  
  


  fetchPokemonImage(){
    this.http.get(this.results[0].url).
    subscribe(data=>{
      console.log(data);
      
    })
  }


  getImage(id:number){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
  }
}
