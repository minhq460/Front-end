import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-main-big',
  templateUrl: './main-big.component.html',
  styleUrls: ['./main-big.component.scss']
})
export class MainBigComponent implements OnInit {

  constructor(public _navService:NavService) { }

  get itemHome(){
    return this._navService.itemHome;
  }

  ngOnInit(): void {
  }

}
