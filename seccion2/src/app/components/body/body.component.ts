import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;
  frase: any = {
    mensaje:
      'ya no quieres excusa, hoy salio con su amiga disque pa matar la tusa',
    autor: 'Karol G',
  };
  personajes: string[] = [
    'gato cosmico',
    'gato con botas',
    'homero simpson',
    'Oliver atom',
  ];
}
