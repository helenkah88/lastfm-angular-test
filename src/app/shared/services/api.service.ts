import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Track } from '../interfaces/track.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) { }

  getAllTracks() {
    const params = {
      params: new HttpParams({ fromString: 'method=chart.gettoptracks&format=json&limit=10'})
    };

    return this.http.get<Track[]>(this.BASE_URL, params).pipe(
      map((response: any) => {
        return response.tracks.track.map((item: any) => new Track(item.name, item.artist.name, item.image, item.artist.url));
      }),
      catchError(err => of(err))
    );
  }

  getByTrack(track) {
    const params = track ? {
      params: new HttpParams({ fromString: 'method=track.search&format=json&track=' + track})
    } : {};

    return this.http.get(this.BASE_URL, params).pipe(
      map((response: any) => {
        return response.results.trackmatches.track.map((item: any) => new Track(item.name, item.artist));
      }),
      catchError(err => of(err))
    );
  }
}
