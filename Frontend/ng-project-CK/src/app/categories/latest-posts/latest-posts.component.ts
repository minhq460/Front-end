import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  constructor(private _navService:NavService) {}

  get rssData(){
    return this._navService.RssData;
  }

  get categories(){
    return this._navService.categories;
  }
  ngOnInit(): void {
  }

}
