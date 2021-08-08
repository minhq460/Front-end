import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss'],
})
export class WorldNewsComponent implements OnInit {
  @Input('itemWorld') item!: RssItem;

  constructor(private router: Router, private _newsService: NewsService) {}

  ngOnInit(): void {}

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
}
