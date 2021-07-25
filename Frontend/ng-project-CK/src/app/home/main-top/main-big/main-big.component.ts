import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-main-big',
  templateUrl: './main-big.component.html',
  styleUrls: ['./main-big.component.scss']
})
export class MainBigComponent implements OnInit {

  @Input('itemMainBig')item!:RssItem;

  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
  }
  get getTitle(){
    return this._newsService.getTitle;
  }
}
