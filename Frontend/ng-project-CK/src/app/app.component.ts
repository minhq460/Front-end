import { Component } from '@angular/core';
import { RssItem } from './news-rss';
import { NavService } from './service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-project';

  items!:RssItem[];
  constructor(private _navService: NavService){
    this.items=this._navService.getItemHome();
  }
}
