import { Component, Input, OnInit } from '@angular/core';
import { NewsDetail } from 'src/app/model/news-detail.model';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {
  // currentNews!: NewsDetail;

  @Input() item!:NewsDetail;
  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    // this.currentNews = this._newsService.currentNews;
    // setTimeout(() => {
    //   console.log('ArticleContentComponent running:',this.item);
    // }, 2000);
    
  }

}
