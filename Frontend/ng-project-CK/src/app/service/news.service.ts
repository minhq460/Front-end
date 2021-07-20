import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) {}
  getNews(url: string, _header: object = {} ): Observable<any> {
    return this._http.get<any>(url, _header);
  }
}
