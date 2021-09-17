import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss'],
})
export class FeaturedPostComponent implements OnInit {
  currentPage: any;
  totalLenght: any;
  p: number = 1;

  constructor(public _navService: NavService, private router: Router, private _newsService: NewsService) {}

  get rssData() {
    return this._navService.RssData;
  }

  ngOnInit(): void {
    this.clicktop();
    // this.scrollOnTop();
  }

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':a}});
    }, 500);
  }

  clicktop(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop>=0;
  }

  // scrollOnTop() {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //       return;
  //     }
  //     window.scrollTo(0, 0);
  //   });
  // }
}
