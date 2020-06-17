import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean = true;
  constructor(private spotify: SpotifyService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
    });
  }

  ngOnInit(): void {}
  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
      console.log(artista);
    });
  }
}
