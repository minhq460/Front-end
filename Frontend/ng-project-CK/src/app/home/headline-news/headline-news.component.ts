import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-headline-news',
  templateUrl: './headline-news.component.html',
  styleUrls: ['./headline-news.component.scss']
})
export class HeadlineNewsComponent implements OnInit {

  itemHome!:RssItem[];
  itemWorld!:RssItem[];

  constructor(private _navService: NavService, private router: Router, private _newsService: NewsService) {
    this.itemHome = this._navService.getItemHome();
    this.itemWorld = this._navService.getItemWorld();
  }

  ngOnInit(): void {}

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    // this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':a}});
    }, 500);
  }

}
