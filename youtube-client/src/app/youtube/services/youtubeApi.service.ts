import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, mergeMap } from 'rxjs';
import IItemVideoData from 'src/app/core/components/search/searchItem.model';

@Injectable({
  providedIn: 'root',
})
export default class KeyAPIService {
  public youtubeData$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  search(value: string) {
    this.http.get<IItemVideoData>(`search/&q=${value}`)
      .pipe(
        map((response: any) => response.items.map((item: any) => item.id.videoId)),
        mergeMap((element: any) => this.http.get<IItemVideoData>(`videos/&id=${element.join(',')}`)),
      ).subscribe((finalResponse: any) => this.youtubeData$.next(finalResponse.items));
  }
}
