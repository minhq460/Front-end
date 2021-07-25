import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  @Input('itemLatestPost')item!:RssItem;

  constructor(private router: Router, private _newsService: NewsService) { }


  ngOnInit(): void {
  }
  getTitle(title: any){
    let a = title.trim();
    console.log('a:',a);
    
    this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post']);
  }, 5000);
  }
}
