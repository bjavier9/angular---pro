import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroeService: HeroeService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes();
    // console.log(this.heroes);
  }
  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }
}
