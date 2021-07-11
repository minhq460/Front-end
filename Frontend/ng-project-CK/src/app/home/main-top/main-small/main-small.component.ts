import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-main-small',
  templateUrl: './main-small.component.html',
  styleUrls: ['./main-small.component.scss']
})
export class MainSmallComponent implements OnInit {

  constructor(public _navService:NavService) { }

  get itemHome(){
    return this._navService.itemHome;
  }

  ngOnInit(): void {
  }

}
