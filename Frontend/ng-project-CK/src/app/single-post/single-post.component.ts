import { Component, OnInit } from '@angular/core';
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


  constructor(private _navService: NavService, private newsdService: NewsService ) {
    this.items = this._navService.getItemHome();
  }

  ngOnInit(): void {
    // this.getNewsDetailItems();
    this.currentNews = this.newsdService.currentNews;
    console.log('SinglePost running');

  }

  getNewsDetailItems() {
    this.newsdService.getNewsDetail().subscribe((res: any) => {
      this.newsDetail = res;
      console.log("res",res);
    });
  }


}
