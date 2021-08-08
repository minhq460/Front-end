import { Component, Input, OnInit } from '@angular/core';
import { NewsDetail } from 'src/app/model/news-detail.model';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  @Input('itemNewsDetail') item!:NewsDetail;
  constructor() { }

  ngOnInit(): void {
    // this.currentNews = this._newsService.currentNews;
    // setTimeout(() => {
    //   console.log('ArticleContentComponent running:',this.item);
    // }, 2000);

  }

}
