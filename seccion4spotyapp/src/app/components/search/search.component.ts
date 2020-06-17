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
  loading: boolean = false;
  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  buscar(valor: string) {
    console.log(valor);
    this.loading = true;
    this.spotify.getArtistas(valor).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
