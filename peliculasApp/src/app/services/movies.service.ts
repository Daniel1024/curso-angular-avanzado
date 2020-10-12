import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../interfaces/movie-response';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private page = 1;

  constructor(
    private http: HttpClient
  ) { }

  get params(): any {
    return {
      api_key: '80f66c80a9b8bae6bf1cc6882e04f0b0',
      language: 'es-ES',
      page: this.page.toString()
    };
  }

  getCartelera(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap(() => {
        this.page += 1;
      })
    );
  }
}
