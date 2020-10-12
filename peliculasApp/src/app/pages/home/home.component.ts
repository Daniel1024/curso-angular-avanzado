import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.moviesService.getCartelera().subscribe(
        (results) => {
          this.movies.push(...results);
        }
      );
    }
  }

  constructor(
    private moviesService: MoviesService
  ) {
    this.moviesService.getCartelera()
      .subscribe(
        (results) => {
          this.movies = results;
          this.moviesSlideShow = results;
        }
      );
  }

  ngOnInit(): void {
  }

}
