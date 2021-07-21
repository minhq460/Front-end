import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-main-small',
  templateUrl: './main-small.component.html',
  styleUrls: ['./main-small.component.scss']
})
export class MainSmallComponent implements OnInit {

  @Input('itemMainSmall')item!:RssItem;

  constructor() { }

  ngOnInit(): void {
  }

}
