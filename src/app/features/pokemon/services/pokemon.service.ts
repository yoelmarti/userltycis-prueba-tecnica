import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {/* Empty*/ }

  getPokemons = (limit: number, offset: number): Observable<any> =>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
