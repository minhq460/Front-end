import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit {

  @Input('itemWorld')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
