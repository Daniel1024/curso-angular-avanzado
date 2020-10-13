import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    let resp = './assets/img/no-image.jpg';
    if (poster) {
      resp = `http://image.tmdb.org/t/p/w500${poster}`;
    }

    return resp;
  }

}
