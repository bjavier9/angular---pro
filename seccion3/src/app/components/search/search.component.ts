import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['text']);
      this.heroes = this.heroeService.buscarHeroes(params['text']);
      console.log(this.heroes);
    });
  }
  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }
}
