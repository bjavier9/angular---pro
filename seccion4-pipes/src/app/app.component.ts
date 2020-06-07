import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'ViOleTa PaRrA';
  mostrar: boolean = true;
  arreglo: number[] = [1, 3, 4, 5, 6, 7, 8, 9, 0];
  PI: number = Math.PI;
  url: string = 'https://www.youtube.com/embed/dlRMeLWTV4o';
  porcentaje: number = 0.3456;
  salario: number = 124562.34;
  idioma: string = 'es';
  fecha: Date = new Date();
  personas: string[] = ['Juana', 'carla', 'rodrigo', 'Morgan', 'Gatubella'];
  prom = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Te amo mirame prometido');
    }, 2000);
  });
  heroe = {
    nombre: 'Laura rosio',
    clave: '23567',
    edad: 400,
    direccion: {
      calle: 'primera',
      casa: 23,
    },
  };
}
