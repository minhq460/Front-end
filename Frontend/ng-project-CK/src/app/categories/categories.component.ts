import { Component, OnInit } from '@angular/core';
import { RssItem } from '../news-rss';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  items!:RssItem[];

  constructor(private _navService: NavService) {
    this.items = this._navService.getItemHome();
  }
  ngOnInit(): void {
  }

}
