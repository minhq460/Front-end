import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {

  @Input() getRelatedCategories!:any
  constructor(private _navService:NavService, private router: Router) { }

  ngOnInit(): void {

  }

  get RssData() {
    return this._navService.RssData;
  }

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title':a}});
    }, 500);
  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
}
