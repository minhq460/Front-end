import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-fast-news',
  templateUrl: './fast-news.component.html',
  styleUrls: ['./fast-news.component.scss']
})
export class FastNewsComponent implements OnInit {

  constructor(public _navService:NavService) {}

  get itemHome(){
    return this._navService.itemHome;
  }

  ngOnInit(): void {
  }

}
