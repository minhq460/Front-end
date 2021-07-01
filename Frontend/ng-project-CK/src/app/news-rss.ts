export interface NewsRss {
  rss: IRssObject;
  items:RssItem;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  "atom:link": Array<string>;
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
  "atom:link":string;
  constructor(title: string, description: string, link: string, image: string, pubDate: Date) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.image = image;
    this.pubDate = pubDate;
  }
}
