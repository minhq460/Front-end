export class NewsDetail {
  categories: String;
  newsTitle: String;
  pubDate:String;
  description: String;
  imageUrl: String;
  author:String;
  content: String;

  constructor(categories='', newsTitle = '', pubDate='', description = '',imageUrl = '', author='' , content = '') {
    this.categories=categories;
    this.newsTitle = newsTitle;
    this.pubDate=pubDate;
    this.description = description;
    this.imageUrl=imageUrl;
    this.author=author;
    this.content = content;
  }
}
