import { Pipe, PipeTransform } from '@angular/core';
import IItemVideoData from '../../core/components/search/searchItem.model';

@Pipe({
  name: 'filterword',
})
export default class FilterwordPipe implements PipeTransform {
  search: string;

  transform(value: IItemVideoData[], search: string): IItemVideoData[] {
    this.search = search;
    const lowerSearch = this.search.toLowerCase();
    return this.search
      ? value.filter((title) => title.snippet.title.toLowerCase().includes(lowerSearch))
      : value;
  }
}
