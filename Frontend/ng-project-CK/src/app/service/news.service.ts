import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsDetail } from '../model/news-detail.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private REST_API_SERVER = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private _http: HttpClient) {}

  getNews(url: string, _header: object = {} ): Observable<any> {
    return this._http.get<any>(url, _header);
  }

  getNewsDetail(): Observable<NewsDetail[]> {
    const url = `${this.REST_API_SERVER}/newsd`;
    return this._http.get<NewsDetail[]>(url, this.httpOptions);
  }
}
