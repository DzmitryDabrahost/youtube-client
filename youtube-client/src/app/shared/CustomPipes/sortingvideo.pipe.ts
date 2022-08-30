import { Pipe, PipeTransform } from '@angular/core';
import IItemVideoData from '../../core/components/search/searchItem.model';
import SortingWords from '../Enums/SortingWords.enum.model';

@Pipe({
  name: 'sortingvideo',
})
export default class SortingvideoPipe implements PipeTransform {
  result: IItemVideoData[] = [];

  transform(inputData: IItemVideoData[], sort: string = ''): IItemVideoData[] {
    if (sort === '') {
      return inputData;
    }

    if (sort === SortingWords.viewUp || sort === SortingWords.viewDown) {
      this.result = inputData.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
      if (sort === SortingWords.viewDown) {
        this.result.reverse();
      }
    }

    if (sort === SortingWords.dateUp || sort === SortingWords.dateDown) {
      this.result = inputData.sort((a, b) => {
        const firstDate = new Date(a.snippet.publishedAt).getTime();
        const secondDate = new Date(b.snippet.publishedAt).getTime();
        return secondDate - firstDate;
      });
      if (sort === SortingWords.dateDown) {
        this.result.reverse();
      }
    }

    return this.result;
  }
}
