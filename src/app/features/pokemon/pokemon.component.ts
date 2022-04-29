import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemonList: any[] = [] 
  page: number = 1
  offset?: number;
  totalPokemons?: number;
  
  

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons = () =>{
    this.service.getPokemons(20, this.offset = (this.page * 20) - 20).subscribe((res: any)=>{
      this.totalPokemons = res.count
      res.results.forEach((result: any) => {
          this.service.getMoreData(result.name).subscribe((res: any)=>{
            this.pokemonList.push(res)
          })
        });
      });
  }


  handleSearch(value: string){
    this.filterValue = value
  }

  //Filtro
  filterValue = ''
}

