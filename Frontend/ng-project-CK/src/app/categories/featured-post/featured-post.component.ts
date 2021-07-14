import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private _navService:NavService) {}

  get rssData(){
    return this._navService.RssData;
  }
  get changeCategoryItem(){
    return this._navService.changeCategoryItem;
  }

  ngOnInit(): void {
  }

}
