import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {

  constructor(public _navService:NavService) {}

  get itemHome(){
    return this._navService.itemHome;
  }

  ngOnInit(): void {
  }

}
