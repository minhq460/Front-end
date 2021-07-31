export interface NewsRss {
  rss: IRssObject;
  // items:RssItem;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  'atom:link': Array<string>;
  description: Array<string>;
  image: Array<IRssImage>;
  item: Array<RssItem>;
  language: Array<string>;
  lastBuildDate: Date;
  link: Array<string>;
  title: Array<string>;
}

export interface IRssImage {
  link: Array<string>;
  title: Array<string>;
  url: Array<string>;
}

export class RssItem {
  category!: string;
  description!: string;
  guid!: any;
  link!: string;
  pubDate!: Date;
  title!: string;
  image!: string;
  'atom:link': string;

  constructor(
    title: string,
    description: string,
    link: string,
    image: string,
    pubDate: Date
  ) {
    // this.category = category;
    this.title = title;
    this.description = description;
    this.link = link;
    this.image = image;
    this.pubDate = pubDate;
  }
  getTime(): string {
    let now: Date = new Date();
    if (
      now.getDate() == this.pubDate.getDate() &&
      now.getMonth() == this.pubDate.getMonth() &&
      now.getFullYear() == this.pubDate.getFullYear()
    ) {
      if ((now.getTime() - this.pubDate.getTime()) / 60000 <= 60) {
        let x = parseInt((now.getTime() - this.pubDate.getTime()) / 60000 + '');

        return x == 0 ? 1 + '' : x + ' phút trước';
      }
      return now.getHours() - this.pubDate.getHours() + ' giờ trước';
    }
    let hours: string = this.pubDate.getHours() + '';
    let minu: string = this.pubDate.getMinutes() + '';
    if (parseInt(hours) < 10) {
      hours = '0' + hours;
    }
    if (parseInt(minu) < 10) {
      minu = '0' + minu;
    }
    return hours + ':' + minu;
  }

  getDate(): string {
    let day: string = this.pubDate.getDate() + '';
    let month: string = this.pubDate.getMonth() + '';
    let year = this.pubDate.getFullYear();
    let now: Date = new Date();
    if (
      now.getDate() == this.pubDate.getDate() &&
      now.getMonth() == this.pubDate.getMonth() &&
      now.getFullYear() == this.pubDate.getFullYear()
    ) {
      return 'Hôm nay';
    }
    if (parseInt(day) < 10) {
      day = '0' + day;
    }
    if (parseInt(month) < 10) {
      month = '0' + month;
    }
    return day + '/' + month + '/' + year;
  }
}
