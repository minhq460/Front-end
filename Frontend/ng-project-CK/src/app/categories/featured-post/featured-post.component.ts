import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RssItem } from 'src/app/model/news-rss';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent implements OnInit {

  currentPage:any;
  totalLenght:any;
  p:number=1;
  items!: RssItem[];

  constructor(public _navService:NavService, private router: Router, private _newsService: NewsService) {
  }

  get rssData(){
    return this._navService.RssData;
  }

  ngOnInit(): void {
  }

  getTitle(title: any){
    let a = title[0].trim();
    console.log('a:',a);
    
    this._newsService.setCurrentTitle(a);
    setTimeout(() => {
      this.router.navigate(['/single-post']);
  }, 5000);
    
  }

}
