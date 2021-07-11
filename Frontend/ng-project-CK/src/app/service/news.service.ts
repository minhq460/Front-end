import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsRss, RssItem } from '../news-rss';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private _http: HttpClient) {}
  getNews(url: string, _header: object = {} ): Observable<NewsRss> {
    return this._http.get<NewsRss>(url, _header);
  }

  getNews2(url:string, _header:object={}): Observable<RssItem>{
    return this._http.get<RssItem>(url, _header);
  }
}
