import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/news-rss';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  @Input('itemPopular')item!:RssItem;

  constructor() { }


  ngOnInit(): void {
  }

}
