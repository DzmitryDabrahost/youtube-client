import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class HeaderInterceptor implements HttpInterceptor {
  private baseUrl = 'https://www.googleapis.com/youtube/v3/';

  private API_KEY = 'AIzaSyBZ9rkgJL7--opqaHIxoSXVFgfCTqGYhFM';

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    let newRequest = request;
    const paramKey = new HttpParams().set('?key', this.API_KEY);
    switch (true) {
      case request.url.startsWith('search'): {
        const paramSearch = new HttpParams().set('type', 'video').set('maxResults', '15');
        const startUrlSearch = request.url.slice(0, request.url.indexOf('&'));
        const endUrlSearch = request.url.slice(request.url.indexOf('&'));
        newRequest = request.clone({
          url: `${this.baseUrl}${startUrlSearch}${paramKey}&${paramSearch}${endUrlSearch}`,
        });
        return next.handle(newRequest as HttpRequest<string>);
      }
      case request.url.startsWith('videos'): {
        const paramVideos = new HttpParams().set('part', 'snippet,statistics');
        const startUrlVideos = request.url.slice(0, request.url.indexOf('&'));
        const endUrlVideos = request.url.slice(request.url.indexOf('&'));
        newRequest = request.clone({
          url: `${this.baseUrl}${startUrlVideos}${paramKey}${endUrlVideos}&${paramVideos}`,
        });
        return next.handle(newRequest as HttpRequest<string>);
      }
      default: {
        return next.handle(request);
      }
    }
  }
}
