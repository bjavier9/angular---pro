import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent {
  heroe: any = {};
  imagen: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroeService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.heroe = this.heroeService.getHeroe(params['id']);
      console.log(this.heroe);
      this.imagen =
        this.heroe.casa == 'DC' ? 'assets/dc.png' : 'assets/marvel.png';
    });
  }
}
