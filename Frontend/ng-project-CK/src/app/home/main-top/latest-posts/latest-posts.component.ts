import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  @Input('itemLatestPost')item!:RssItem;

  constructor() { }


  ngOnInit(): void {
  }

}
