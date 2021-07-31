import { Component, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-headline-news',
  templateUrl: './headline-news.component.html',
  styleUrls: ['./headline-news.component.scss']
})
export class HeadlineNewsComponent implements OnInit {

  itemHome!:RssItem[];
  itemWorld!:RssItem[];

  constructor(private _navService: NavService) {
    this.itemHome = this._navService.getItemHome();
    this.itemWorld = this._navService.getItemWorld();
  }

  ngOnInit(): void {}


}
