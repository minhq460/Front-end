export class NewsDetail {
  category: String;
  newsTitle: String;
  pubDate:String;
  description: String;
  imageUrl: String;
  author:String;
  content: String;

  constructor(category='', newsTitle = '', pubDate='', description = '',imageUrl = '', author='' , content = '') {
    this.category=category;
    this.newsTitle = newsTitle;
    this.pubDate=pubDate;
    this.description = description;
    this.imageUrl=imageUrl;
    this.author=author;
    this.content = content;
  }
}
