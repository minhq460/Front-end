import { Component, OnInit } from '@angular/core';
import { RssItem } from '../model/news-rss';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items!:RssItem[];
  itemVideo!:RssItem[];
  itemWorld!:RssItem[];

  constructor(private _navService: NavService) {
    this.items = this._navService.getItemHome();
    this.itemVideo = this._navService.getItemVideo();
    this.itemWorld = this._navService.getItemWorld();
  }

  ngOnInit(): void {
  }

}
