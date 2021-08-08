import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsDetail } from '../model/news-detail.model';
import { RssItem } from '../model/news-rss';
import { NavService } from '../service/nav.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  newsDetail: NewsDetail[]=[];
  items!:RssItem[];
  currentNews!: NewsDetail;
  title!:string;

  constructor(private _navService: NavService, private _newsService: NewsService, private activeRouted: ActivatedRoute ) {
    this.items = this._navService.getItemHome();
  }

  ngOnInit(): void {
    // this.getNewsDetailItems();
    // this.currentNews = this._newsService.currentNews;

    this.getQueryParams();
    this.newsSearchResult();
  }

  getNewsDetailItems() {
    this._newsService.getNewsDetail().subscribe((res: any) => {
      this.newsDetail = res;
      console.log("res",res);
    });
  }

  newsSearchResult(){
    this._newsService.getNewsSearch(this.title).subscribe((data:any) =>{
      this.newsDetail = data;
    });
  }

  getQueryParams() {
    this.activeRouted.queryParams.subscribe((res: any) => {
      console.log(res.title, 'display query');
      this.title = res.title;
    });
  }

}
