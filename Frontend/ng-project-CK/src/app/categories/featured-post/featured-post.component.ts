import { Component, OnInit } from '@angular/core';
import { RssItem } from 'src/app/news-rss';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent implements OnInit {

  currentPage:any;
  totalLenght:any;
  p:number=1;
  items!: RssItem[];

  constructor(public _navService:NavService) {
  }

  get rssData(){
    return this._navService.RssData;
  }

  ngOnInit(): void {
  }

}
