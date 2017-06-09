import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];
  loading:boolean = true;

  constructor( private heroesService:HeroesService ) {
    this.heroesService.getHeroes()
        .subscribe( data => {          
          this.heroes = data
          this.loading = false;
          //vamos a hacer mas lento el proceso de cambio de valor
          /*
          setTimeout(()=> {
            this.loading = false;
            this.heroes = data;
          },1000);*/
        });
  }

  ngOnInit() {
  }

  eliminar(key$:string) {
    this.heroesService.eliminarHeroe(key$)
        .subscribe(data => {
          if (data) {
            //ocurrió algún error
            console.error(data);
          }
          //todo bien
          else {
            delete this.heroes[key$];
          }
        })
  }


}
