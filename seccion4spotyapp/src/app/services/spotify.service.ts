import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotyfy Listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCaSNf1grwmLubM4vXK4ZA-QnqMKAkwy8NnLCp_tEBvj8WyInecvqRD0ZxKXDjDyR3X1J_YcDhlCPIfY4A',
    });
    return this.http.get(url, { headers });
  }
  getNewsReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }
}
