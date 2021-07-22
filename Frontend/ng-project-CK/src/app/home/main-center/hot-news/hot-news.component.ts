import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {

  @Input('itemHot')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
