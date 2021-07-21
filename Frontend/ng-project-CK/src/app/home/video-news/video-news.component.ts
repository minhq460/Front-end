import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/news-rss';

@Component({
  selector: 'app-video-news',
  templateUrl: './video-news.component.html',
  styleUrls: ['./video-news.component.scss']
})
export class VideoNewsComponent implements OnInit {

  @Input('itemVideo')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
