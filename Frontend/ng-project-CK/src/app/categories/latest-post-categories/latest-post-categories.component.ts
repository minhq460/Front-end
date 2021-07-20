import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-latest-post-categories',
  templateUrl: './latest-post-categories.component.html',
  styleUrls: ['./latest-post-categories.component.scss'],
})
export class LatestPostCategoriesComponent implements OnInit {

  constructor(public _navService: NavService) {}

  get RssData() {
    return this._navService.RssData;
  }

  ngOnInit(): void {}
}
