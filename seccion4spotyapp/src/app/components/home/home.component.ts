import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(
    private http: HttpClient,
    private spotyfyservice: SpotifyService
  ) {
    this.error = false;
    this.loading = true;
    this.spotyfyservice.getNewsReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = err.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
