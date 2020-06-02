import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroeService: HeroeService) {}

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }
}
