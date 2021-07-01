import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private _http: HttpClient) {}
  getNews(url: string, _header: object = {} ): Observable<any> {
       return this._http.get(url, _header);
  }
}
