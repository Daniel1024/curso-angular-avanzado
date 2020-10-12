import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    console.log(poster);
    if (poster) {
      return `http://image.tmdb.org/t/p/w500${poster}`;
    }

    return './src/assets/img/no-image.jpg';
  }

}
