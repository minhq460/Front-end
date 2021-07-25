import { Component, OnInit } from '@angular/core';
import { NavService } from '../../service/nav.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedItemId: any
  a:any;
  b:any;

  constructor(public _navService: NavService) { }
  ngOnInit(): void {
  }
  get categories(){
    return this._navService.categories;
  }

  get changeCategory(){
    return this._navService.changeCategory;
  }
  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

  get changeCategoryItem(){
    return this._navService.changeCategoryItem;
  }
  
}
