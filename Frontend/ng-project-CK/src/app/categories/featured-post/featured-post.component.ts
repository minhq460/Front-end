import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';
import { parse } from 'node-html-parser';
@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent implements OnInit,AfterViewInit {

  dataParse!: HTMLElement;
  @ViewChild('dataDOM') div!:ElementRef;
  link!: string;
  constructor(private _navService:NavService) {
  }
  ngAfterViewInit(): void {
    // const root = parse(data);
    // this.div.nativeElement.innerHTML = data;
    // console.log(this.div.nativeElement);
    // return root;
    throw new Error('Method not implemented.');
  }

  get rssData(){
    return this._navService.RssData;
  }
  ngAfterContentInit(data:string){
    console.log(typeof(data));
    const root = parse(data);
    console.log(this.div.nativeElement);
    console.log(root);
    
    this.div.nativeElement.innerHTML = data;
    console.log(this.div.nativeElement);
    return root;
  }

  checkData(index: number): any {
    console.log(this.rssData!.rss.channel[index].item[index].description);
    const root = parse(this.rssData!.rss.channel[index].item[0].description);

    var parser = new DOMParser();
    // console.log("index: ",index);
    // console.log("data:",this.rssData!.rss.channel[0].item[index]);
    
	  var doc = parser.parseFromString(this.rssData!.rss.channel[0].item[index].description, 'text/html');
    // console.log(doc.getElementsByTagName('a')[0].href);
    // this.link = doc.getElementsByTagName('a')[0].href;

    return doc;
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
