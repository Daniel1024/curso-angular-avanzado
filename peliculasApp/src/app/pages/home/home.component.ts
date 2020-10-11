import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
    this.moviesService.getCartelera()
      .subscribe(
        ({ results }) => {
          this.movies = results;
        }
      );
  }

  ngOnInit(): void { }

}
