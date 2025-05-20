import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckJokesService {

  constructor(private http: HttpClient) { }

  getDados(){
    return this.http.get(`https://api.chucknorris.io/jokes/random`)
  }

}


// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/173.gif"  retorna um gif da  Cleffa
// "https://api.chucknorris.io/jokes/random" retorna created_at, icon_url, id, updated_at, url, value(piada)get