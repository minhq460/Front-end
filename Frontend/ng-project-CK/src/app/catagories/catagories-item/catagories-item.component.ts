import { Component, Input, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { NavService } from 'src/app/service/nav.service';
import { NewsService } from 'src/app/service/news.service';
import { RssItem } from 'src/app/news-rss';

@Component({
  selector: 'app-catagories-item',
  templateUrl: './catagories-item.component.html',
  styleUrls: ['./catagories-item.component.scss']
})
export class CatagoriesItemComponent implements OnInit {


  // @Input()item!:RssItem;

  // items!: RssItem;
  // topNews:object[]=[];
  // firstNews:object={};
  // get item(){
  //   return this._navService.items;
  // }
  constructor(private _navService:NavService) {

    // this._newsService.getNews('https://thanhnien.vn/rss/' + 'toi-viet' + '.rss', {
    //     headers: new HttpHeaders({
    //       Accept: 'application/xml',
    //     }),
    //     responseType: 'text',
    //   })
    //   .subscribe((data: any) => {
    //     let parseString = xml2js.parseString;
    //     parseString(data, (err, result) => {

    //       this.items = result;
    //     });
    //   });
  }
  get rssData(){
    return this._navService.RssData;
  }
  // get rss(){
  //   return this._navService.items;
  // }

    // getItems():Item{
    // this.firstNews={};
    // this.topNews=[];
    // this._newsService.getNews('https://thanhnien.vn/rss/thoi-su/chinh-tri.rss', {
    //       headers: new HttpHeaders({
    //         Accept: 'application/xml',
    //       }),
    //       responseType: 'text',
    //     })
    //     .subscribe((data: any) => {
    //       let parseString = xml2js.parseString;
    //       parseString(data, (err, result) => {
    //           this.items=result;

    //       });
    //     });
    // }
    // private convertToItem(element:any): RssItem{
    //   let title = element.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
    //   let link = element.getElementsByTagName('link')[0].innerHTML;
    //   // let image=element.getElementsByTagName('link')[0].innerHTML

    //   // convert tags in description
    //   let desc = element.getElementsByTagName('description')[0].innerHTML.slice(9, -3);
    //   let parser = new DOMParser();
    //   let html = parser.parseFromString(desc, "text/html");

    //   //convert image link with full width
    //   let image = html.getElementsByTagName('img')[0].src;
    //   let indexc = image.indexOf('uploaded');
    //   image = "https://image.thanhnien.vn/" + image.slice(indexc);

    //   // get pubdate
    //   let pubDate = element.getElementsByTagName('pubDate')[0].innerHTML.trim();
    //   let date: Date = new Date(pubDate);

    //    // get text desciption need to remove orther text content
    //    let body = html.getElementsByTagName('body')[0];
    //    let rem = html.getElementsByTagName('div')[0];
    //    if (rem != null) {
    //      rem.remove();
    //    }

    //   let description = body.textContent;
    //   //object RssItem
    //   let rssItem=new RssItem(title, description ??'', link, image, date);
    //   return rssItem;
    // }
  ngOnInit(): void {

  }


}
