import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';

@Component({
  selector: 'app-video-news',
  templateUrl: './video-news.component.html',
  styleUrls: ['./video-news.component.scss']
})
export class VideoNewsComponent implements OnInit {

  @Input('itemVideo')item!:RssItem;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    // this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':a}});
    }, 500);
  }
}
