import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-fast-news',
  templateUrl: './fast-news.component.html',
  styleUrls: ['./fast-news.component.scss'],
})
export class FastNewsComponent implements OnInit {
  @Input('itemFast') item!: RssItem;
  constructor(public _newsService: NewsService, private router: Router) {}

  ngOnInit(): void {}
  getTitle(title: any) {
    let a = title.trim();
    console.log('a:', a);

    this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post']);
    }, 5000);
  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
}
