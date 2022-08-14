import { Pipe, PipeTransform } from '@angular/core';
import IItemVideoData from '../search/search-item.model';

@Pipe({
  name: 'sortingvideo',
})
export default class SortingvideoPipe implements PipeTransform {
  result: IItemVideoData[] = [];

  transform(inputData: IItemVideoData[], sort: string = ''): IItemVideoData[] {
    if (sort === '') {
      return inputData;
    }

    if (sort === 'viewUp' || sort === 'viewDown') {
      this.result = inputData.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
      if (sort === 'viewDown') {
        this.result.reverse();
      }
    }

    if (sort === 'dateUp' || sort === 'dateDown') {
      this.result = inputData.sort((a, b) => {
        const firstDate = new Date(a.snippet.publishedAt).getTime();
        const secondDate = new Date(b.snippet.publishedAt).getTime();
        return secondDate - firstDate;
      });
      if (sort === 'dateDown') {
        this.result.reverse();
      }
    }

    return this.result;
  }
}
