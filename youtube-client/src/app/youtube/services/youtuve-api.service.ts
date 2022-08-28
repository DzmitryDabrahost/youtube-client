import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, mergeMap } from 'rxjs';
import IItemVideoData from 'src/app/core/components/search/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class KeyAPIService {
  private personalKey: string = 'AIzaSyBZ9rkgJL7--opqaHIxoSXVFgfCTqGYhFM';

  public youtubeData$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  search(value: string) {
    this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.personalKey}&type=video&part=snippet&maxResults=15&q=${value}`)
      .pipe(
        map((response: any) => response.items.map((item: any) => item.id.videoId)),
        mergeMap((element: any) => this.http.get<IItemVideoData>(`https://www.googleapis.com/youtube/v3/videos?key=${this.personalKey}&id=${element.join(',')}&part=snippet,statistics`)),
      )
      .subscribe((finalResponse: any) => {
        this.youtubeData$.next(finalResponse.items);
      });
  }
}
