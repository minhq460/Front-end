import { Component, Input, OnInit } from '@angular/core';
import { NewsDetail } from 'src/app/model/news-detail.model';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  @Input('itemNewsDetail') item!:NewsDetail;
  relatedCategories:any;

  constructor() { }

  ngOnInit(): void {
    // this.currentNews = this._newsService.currentNews;
    // setTimeout(() => {
    //   console.log('ArticleContentComponent running:',this.item);
    // }, 2000);
    this.relatedCategories=this.item.category
    console.log("thể loại liên quan: ",this.relatedCategories);

  }

}
