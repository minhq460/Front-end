import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // getTitle(title: any) {
  //   let a = title.trim();
  //   console.log('a:', a);

  //   this._newsService.setCurrentTitle(a);
  //   setTimeout(() => {
  //     this.router.navigate(['/home']);
  //   }, 2000);
  //   setTimeout(() => {
  //     this.router.navigate(['/single-post']);
  //   }, 5000);
  // }

  clicktop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }
}
