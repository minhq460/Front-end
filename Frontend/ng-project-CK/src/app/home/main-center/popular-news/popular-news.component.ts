import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  constructor(public _navService:NavService) {}

  get itemHome(){
    return this._navService.itemHome;
  }

  ngOnInit(): void {
  }

}
