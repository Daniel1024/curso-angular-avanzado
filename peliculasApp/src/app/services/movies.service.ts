import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieResponse } from '../interfaces/movie-response';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private page = 1;
  public loading = false;

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

  getCartelera(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map(({ results }) => results),
      tap(() => {
        this.page += 1;
        this.loading = false;
      })
    );
  }
}
