import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  buscar(valor: string) {
    console.log(valor);
    this.spotify.getArtista(valor).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
    });
  }
}
