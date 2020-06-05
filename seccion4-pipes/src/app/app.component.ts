import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Violeta Parra';
  arreglo: number[] = [1, 3, 4, 5, 6, 7, 8, 9, 0];
  PI: number = Math.PI;
  personas: string[] = ['Juana', 'carla', 'rodrigo', 'Morgan', 'Gatubella'];
}
