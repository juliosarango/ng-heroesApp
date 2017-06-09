import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-4af16.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-4af16.firebaseio.com/heroes/";


  constructor( private http:Http ) { }

  nuevoHeroe(heroe:Heroe) {

    //seteamos el body y los headers que se van a enviar a firebase
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    //el método post devuelve un observable, luego de llamarla debemos subscribirmos a esta para que se ejecute el método del servicio

    return this.http.post( this.heroesURL, body, {headers:headers} )
            .map( res => {
              console.log(res.json());
              return res.json();
            });
  }

  actualizarHeroe(heroe:Heroe, key$:string) {

    //seteamos el body y los headers que se van a enviar a firebase
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`;

    //el método post devuelve un observable, luego de llamarla debemos subscribirmos a esta para que se ejecute el método del servicio

    return this.http.put( url, body, {headers:headers} )
            .map( res => {
              console.log(res.json());
              return res.json();
            });
  }

  getHeroe( key$:string ){
    let url= `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url )
        .map(res => res.json());
  }

  getHeroes() {
    return this.http.get( this.heroesURL )
        .map(res => res.json());
  }

  eliminarHeroe(key$:string) {
    let url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete( url )
          .map(res => res.json())  ;
  }

}
