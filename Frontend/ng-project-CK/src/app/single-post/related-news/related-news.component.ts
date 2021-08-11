import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {

  @Input() getRelatedCategories!:any
  constructor() { }

  ngOnInit(): void {

  }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
}
