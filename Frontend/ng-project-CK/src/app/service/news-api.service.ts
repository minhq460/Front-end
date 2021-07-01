import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key='q0yisrsl9h97j6crimxbyadx4o4lqbg3qiun6irg';

  constructor(private _http: HttpClient) { }

  getNews(categories:any[]):Observable<any>{
    return this._http.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2F'+categories+'.rss&api_key='+this.api_key);
  }
  getNewsItems(categories:any[], categoriesItems:any[]):Observable<any>{
    return this._http.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2F'+categories+'%2F'+categoriesItems+'.rss&api_key='+this.api_key);
  }
}
