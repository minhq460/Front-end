import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsDetail } from '../model/news-detail.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentTitle!: string;
  currentNewsList!: NewsDetail[];
  currentNews!: NewsDetail;

  private REST_API_SERVER = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private _http: HttpClient) {}

  getNews(url: string, _header: object = {} ): Observable<any> {
    return this._http.get<any>(url, _header);
  }

  getNewsDetail(): Observable<NewsDetail[]> {
    const url = `${this.REST_API_SERVER}/newsDetail`;
    return this._http.get<NewsDetail[]>(url, this.httpOptions);
  }
  // lay title khi click vao bai bao
  // async setCurrentTitle(title: string){
  //   console.log('service run');

  //   this.currentTitle = title;
  //   this.getNewsDetail().subscribe(async data => {
  //     this.currentNewsList = data;
  //     await this.currentNewsList.forEach(item => {
  //       if (item.newsTitle === this.currentTitle) {
  //         this.currentNews = item;
  //         console.log('current News1:',this.currentNews);
  //       }
  //     });
  //     console.log('current News:',this.currentNews);

  //   })
  // }

  public getNewsSearch(keyword:string): Observable<NewsDetail[]> {
    const url = `${this.REST_API_SERVER}/newsDetail/?newsTitle_like=${keyword}`;
    return this._http.get<NewsDetail[]>(url, this.httpOptions);
  }

  public getProductsRelated(page: Number,category: string): Observable<NewsDetail[]> {
    const url = `${this.REST_API_SERVER}/newsDetail?category=${category}&_limit=2&_page=${page}`;
    return this._http.get<NewsDetail[]>(url, this.httpOptions);
  }

  public category: BehaviorSubject<string> = new BehaviorSubject<string>(null!);
}
