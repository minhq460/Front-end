import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-latest-post-categories',
  templateUrl: './latest-post-categories.component.html',
  styleUrls: ['./latest-post-categories.component.scss'],
})
export class LatestPostCategoriesComponent implements OnInit {

  constructor(public _navService: NavService, private router: Router, private _newsService: NewsService) {}

  get RssData() {
    return this._navService.RssData;
  }

  ngOnInit(): void {}

  getTitle(title: any) {
    let a = title[0].trim();
    console.log('a:', a);

    this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post']);
    }, 5000);
  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop>=0;
  }
}
