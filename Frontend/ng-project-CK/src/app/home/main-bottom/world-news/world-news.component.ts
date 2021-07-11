import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit {

  constructor(private _navService: NavService) { }

  get itemWorldNews(){
    return this._navService.itemWorldNews;
  }

  ngOnInit(): void {
  }

}
