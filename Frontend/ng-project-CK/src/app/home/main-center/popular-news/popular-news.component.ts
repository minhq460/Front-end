import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  @Input('itemPopular')item!:RssItem;

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
