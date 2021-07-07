import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RssItem, NewsRss } from '../news-rss';
import { NewsService } from './news.service';
import * as xml2js from 'xml2js';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  currentCategoryChoosen:string = "home";

  categories:any [] = [{name:'Video', url:'video'}, {name:'Thời Sự', url:'thoi-su'}, {name:'Thế Giới', url:'the-gioi'}, {name:'Tài Chính - Kinh Doanh', url:'tai-chinh-kinh-doanh'},
  {name:'Đời Sống', url:'doi-song'}, {name:'Văn Hoá', url:'van-hoa'}, {name:'Giải Trí', url:'giai-tri'}, {name:'Giới Trẻ', url:'gioi-tre'},
  {name:'Giáo Dục', url:'giao-duc'}, {name:'Thể Thảo', url:'the-thao'}, {name:'Sức Khoẻ', url:'suc-khoe'}, {name:'Du Lịch', url:'du-lich'},
  {name:'Công Nghệ', url:'cong-nghe'}, {name:'Xe', url:'xe'}, {name:'Game', url:'game'}, {name:'Thời Trang Trẻ', url:'ttt'}];



  RssData!: NewsRss;
  items!:RssItem;
  topNews:object[]=[];
  firstNews:object={};

  constructor(private _newsService:NewsService) {
    this._newsService.getNews('https://thanhnien.vn/rss/'+this.currentCategoryChoosen+'.rss', {
        
        responseType: 'text',
      })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
          console.log(this.RssData);
        });
      });
    /*Read Data*/
  }

  changeCategory(_k: string){

    this.currentCategoryChoosen = _k;
    this._newsService.getNews('https://thanhnien.vn/rss/'+this.currentCategoryChoosen+'.rss', {
      headers: new HttpHeaders({
        Accept: 'application/xml',
      }),
      responseType: 'text',
    })
    .subscribe((data: any) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result) => {
        this.RssData = result;
        for (let i = 0; i < 3; i++) {
         this.topNews.push(this.RssData.rss.channel[0].item[i]);
        }
      });
    });
  }

  getItems():RssItem{
  this.firstNews={};
  this.topNews=[];
  this._newsService.getNews('https://thanhnien.vn/rss/thoi-su/chinh-tri.rss', {
        headers: new HttpHeaders({
          Accept: 'application/xml',
        }),
        responseType: 'text',
      })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
           this.items=this.convertToItem(result);
        });
      });
      return this.items;
  }

  private convertToItem(element:any): RssItem{
    let title = element.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
    let link = element.getElementsByTagName('link')[0].innerHTML;
    // let image=element.getElementsByTagName('link')[0].innerHTML

    // convert tags in description
    let desc = element.getElementsByTagName('description')[0].innerHTML.slice(9, -3);

    let parser = new DOMParser();
    let html = parser.parseFromString(desc, "text/html");

    //convert image link with full width
    let image = html.getElementsByTagName('img')[0].src;
    let indexc = image.indexOf('uploaded');
    image = "https://image.thanhnien.vn/" + image.slice(indexc);

    // get pubdate
    let pubDate = element.getElementsByTagName('pubDate')[0].innerHTML.trim();
    let date: Date = new Date(pubDate);

     // get text desciption need to remove orther text content
     let body = html.getElementsByTagName('body')[0];
     let rem = html.getElementsByTagName('div')[0];
     if (rem != null) {
       rem.remove();
     }

    let description = body.textContent;
    //object RssItem
    let rssItem=new RssItem(title, description ??'', link, image, date);
    return rssItem;
  }
  // changeCategory(category: string){
  //   this.topNews=[];
  //   this.firstNews={};
  //   this.currentCategory=category;

  //   this._newsApiService.getNews(this.categories).subscribe((myData)=>{
  //     console.log(myData);
  //     this.newsContainer=myData.items;
  //     this.topNews=this.newsContainer[0];
  //     for(let i =0; i<this.newsContainer.length;i++){
  //       if(this.newsContainer[i].thumbnail == null || this.newsContainer[i].thumbnail == undefined ){
  //         this.newsContainer[i].thumbnail = "./assets/img/placeholder.png";
  //       }
  //     }
  //     for (let i=1;i<3;i++)
  //     {
  //       this.topNews.push(this.newsContainer[i])
  //     }
  //   })
  // }
}
// let parser = new DOMParser();
//           let html = parser.parseFromString(this.newsContainer[i].description, "text/html");
