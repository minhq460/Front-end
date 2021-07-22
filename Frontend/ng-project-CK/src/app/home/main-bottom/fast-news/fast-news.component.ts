import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-fast-news',
  templateUrl: './fast-news.component.html',
  styleUrls: ['./fast-news.component.scss']
})
export class FastNewsComponent implements OnInit {

  @Input('itemFast')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
