import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsDetail } from '../model/news-detail.model';
import { NavService } from '../service/nav.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword!: string;
  key!:string
  searchResule!: NewsDetail[];

  currentPage: any;
  totalLenght: any;
  p: number = 1;

  constructor(private _newsService: NewsService, private router:Router, private activeRouted: ActivatedRoute, private _navService:NavService) { }

  ngOnInit(){
    this.getQueryParams();
    this.newsSearchResult();
    this.clicktop();
  }

  newsSearchResult(){
    this._newsService.getNewsSearch(this.keyword).subscribe((data:any) =>{
      this.searchResule = data;
    });
  }

  getQueryParams() {
    this.activeRouted.queryParams.subscribe((res: any) => {
      console.log(res.keyword, 'display query');
      this.keyword = res.keyword;
    });
  }
  

  public onInput(keyword: any){
    console.log(keyword);
    // setTimeout(() => {
    //   this.router.navigate(['/home']);
    // }, 500);
    setTimeout(() => {
      this.router.navigate(['/search'], {queryParams:{'keyword': keyword}});
    }, 500);
  }

  getTitle(title: any) {
    setTimeout(() => {
      this.router.navigate(['/single-post'], {queryParams:{'title': title}});
    }, 500);
  }

  clicktop(){
    setTimeout(() => {
      document.body.scrollTop=0;
      document.documentElement.scrollTop>=0;
    }, 3000);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
