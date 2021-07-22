export class NewsDetail {
  newTitle: String;
  p: String;
  p1: String;
  constructor(newTitle = '', p = '', p1 = '') {
    this.newTitle = newTitle;
    this.p = p;
    this.p1 = p1;
  }
}
