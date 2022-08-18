import { Pipe, PipeTransform } from '@angular/core';
import IItemVideoData from '../search/search-item.model';

@Pipe({
  name: 'filterword',
})
export default class FilterwordPipe implements PipeTransform {
  filtered: IItemVideoData[] = [];

  transform(value: IItemVideoData[], search: string = ''): IItemVideoData[] {
    if (value) {
      const lowerSearch = search.toLowerCase();
      this.filtered = value.filter((title) => title.snippet.title
        .toLowerCase().includes(lowerSearch));
    }
    return this.filtered;
  }
}
