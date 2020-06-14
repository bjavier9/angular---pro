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

  getNewsReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBs1PgP18FaGxHKQxLjpFzBdBG_4roCOyZNcp4rjFymwmokYTe18lOZVOSIfYlWWA39mb8NpDuWHCibBhY',
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {
        headers,
      })
      .pipe(
        map((data) => {
          return data['albums'].items;
        })
      );
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBs1PgP18FaGxHKQxLjpFzBdBG_4roCOyZNcp4rjFymwmokYTe18lOZVOSIfYlWWA39mb8NpDuWHCibBhY',
    });
    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
        {
          headers,
        }
      )
      .pipe(
        map((data) => {
          return data['artists'].items;
        })
      );
  }
}
