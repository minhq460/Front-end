import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-main-big',
  templateUrl: './main-big.component.html',
  styleUrls: ['./main-big.component.scss']
})
export class MainBigComponent implements OnInit {

  @Input('itemMainBig')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
