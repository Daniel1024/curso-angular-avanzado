import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../interfaces/movie-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getCartelera(): Observable<MovieResponse> {
    return this.http
      .get<MovieResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=80f66c80a9b8bae6bf1cc6882e04f0b0&language=es-ES&page=1');
  }
}
