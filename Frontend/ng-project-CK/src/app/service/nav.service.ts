import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { RssItem, NewsRss } from '../news-rss';
import { NewsService } from './news.service';
import * as xml2js from 'xml2js';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnInit{
  currentCategoryChoosen: string = 'home';
  currentCategoryItemChoosen: string='';

  categories: any[] = [
    {
      title: [{ name: 'Video', url: 'video'}],
      child: [
        { nameItem: 'Thời Sự', urlItem: '/thoi-su' },
        { nameItem: 'Phóng Sự', urlItem: '/phong-su' },
        { nameItem: 'Giải Trí', urlItem: '/giai-tri' },
        { nameItem: 'Món Ngon', urlItem: '/mon-ngon' },
        { nameItem: 'Thể Thao', urlItem: '/the-thao' },
        { nameItem: 'Thế Giới', urlItem: '/the-gioi' },
        { nameItem: 'Trực Tuyến', urlItem: '/truc-tuyen' },
        { nameItem: 'Em Nhảy Ghen Cô Vy', urlItem: '/em-nhay-ghen-co-vy' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Thời Sự', url: 'thoi-su' }],
      child: [
        { nameItem: 'Pháp Luật', urlItem: '/phap-luat' },
        { nameItem: 'Phóng Sự / Điều Tra', urlItem: '/phong-su-dieu-tra' },
        { nameItem: 'Quốc Phòng', urlItem: '/quoc-phong' },
        { nameItem: 'Dân Sinh', urlItem: '/dan-sinh' },
        { nameItem: 'Quyền Được Biết', urlItem: '/quyen-duoc-biet' },
        { nameItem: 'Lao Động - Việc Làm', urlItem: '/lao-dong-viec-lam' },
        // { nameItem: 'Cần Biết', urlItem: '/can-biet' },
        // { nameItem: 'Nghề Hot', urlItem: '/nghe-hot' },
        // { nameItem: 'Kỹ Năng Tìm Viẹc', urlItem: '/ki-nang-tim-viec' },
        // { nameItem: 'Tuyển Dụng', urlItem: '/tuyen-dung' },
        // { nameItem: 'Săn Việc', urlItem: '/san-viec' },
        { nameItem: 'Chính Trị', urlItem: '/chinh-tri' },
        { nameItem: 'Đại Hội XIII', urlItem: '/dai-hoi-xiii' },
        { nameItem: 'Tôi Đón Tết', urlItem: '/toi-don-tet' },
        // { nameItem: 'Vượt Qua Covid-19', urlItem: '/vuot-qua-covid-19' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Thế Giới', url: 'the-gioi' }],
      child: [
        { nameItem: 'Người VIệt Năm Châu', urlItem: '/nguoi-viet-nam-chau' },
        { nameItem: 'Góc Nhìn', urlItem: '/goc-nhin' },
        { nameItem: 'Hồ Sơ', urlItem: '/ho-so' },
        { nameItem: 'Quân Sự', urlItem: '/quan-su' },
        { nameItem: 'Kinh Tế Thế Giới', urlItem: '/kinh-te-the-gioi' },
        { nameItem: 'Chuyện Lạ', urlItem: '/chuyen-la' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Tài Chính - Kinh Doanh', url: 'tai-chinh-kinh-doanh' }],
      child: [
        { nameItem: 'Chứng Khoáng', urlItem: '/chung-khoan' },
        { nameItem: 'Doanh Nhân', urlItem: '/doanh-nhan' },
        { nameItem: 'Địa Ốc', urlItem: '/dia-oc' },
        { nameItem: 'Tiêu Dùng', urlItem: '/tieu-dung' },
        { nameItem: 'Làm Giàu', urlItem: '/lam-giau' },
        // { nameItem: 'Chính Sách - Phát Triển', urlItem: '/chinh-sach-phat-trien'},
        { nameItem: 'Ngân Hàng', urlItem: '/ngan-hang' },
        { nameItem: 'Doanh Nghiệp', urlItem: '/doanh-nghiep' },
        { nameItem: 'Kinh Tế Xanh', urlItem: '/kinh-te-xanh' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Đời Sống', url: 'doi-song' }],
      child: [
        { nameItem: 'Ẩm Thực', urlItem: '/am-thuc' },
        { nameItem: 'Gia Đình', urlItem: '/gia-dinh' },
        { nameItem: 'Cộng Đồng', urlItem: '/cong-dong' },
        { nameItem: 'Người Sống Quanh Ta', urlItem: '/nguoi-song-quanh-ta' },
        { nameItem: 'Sống Xanh', urlItem: '/song-xanh' },
        { nameItem: 'Gương Sáng Biên Cương', urlItem: '/guong-sang-bien-cuong' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Văn Hoá', url: 'van-hoa' }],
      child: [
        { nameItem: 'Câu Chuyện Văn Hoá', urlItem: '/cau-chuyen' },
        { nameItem: 'Thành Phố Tôi Yêu', urlItem: '/thanh-pho-toi-yeu' },
        { nameItem: 'Khảo Cứu', urlItem: '/khao-cuu' },
        { nameItem: 'Xem - Nghe', urlItem: '/xem-nghe' },
        { nameItem: 'Thương Nhớ Miền Trung',  urlItem: '/thuong-nho-mien-trung'},
        { nameItem: 'Hà Nội Thành Phố Tôi Yêu', urlItem: '/ha-noi-thanh-pho-toi-yeu'},
        { nameItem: 'Sống Đẹp', urlItem: '/song-dep' },
        { nameItem: 'Món Ngon Hà Nội', urlItem: '/mon-ngon-ha-noi' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Giải Trí', url: 'giai-tri' }],
      child: [
        { nameItem: 'Truyền Hình', urlItem: '/truyen-hinh' },
        { nameItem: 'Phim', urlItem: '/phim' },
        { nameItem: 'Đời Nghệ Sĩ', urlItem: '/doi-nghe-si' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Giới Trẻ', url: 'gioi-tre' }],
      child: [
        { nameItem: 'Sống - Yêu - Ăn - Chơi', urlItem: '/song-yeu-an-choi' },
        { nameItem: 'Thế Giới Mạng', urlItem: '/the-gioi-mang' },
        { nameItem: 'Kết Nối', urlItem: '/ket-noi' },
        { nameItem: 'Đoàn - Hội', urlItem: '/doan-hoi' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Giáo Dục', url: 'giao-duc' }],
      child: [
        { nameItem: 'Du Học', urlItem: '/du-hoc' },
        { nameItem: 'Chọn Nghề', urlItem: '/chon-nghe' },
        { nameItem: 'Người Thầy', urlItem: '/nguoi-thay' },
        { nameItem: 'Chọn Trường', urlItem: '/chon-truong' },
        // { nameItem: 'Hộp Thư Tư Vấn 24/7', urlItem: '/hop-thu-tu-van-24-7' },
        // { nameItem: ' Ôn Thi THPT Quốc Gia 2019', urlItem: '/on-thi-thpt-quoc-gia-2019'},
        // { nameItem: 'Tra Cứu Điểm Thi 2021', urlItem: '/tuyen-sinh/2021/tra-cuu'},
        { nameItem: 'Tuyển Sinh 2021', urlItem: '/tuyen-sinh/2021' },
        { nameItem: 'Sức Khoẻ Học Đường', urlItem: '/suc-khoe-hoc-duong' },
        // { nameItem: 'Cẩm Nang Tuyển Sinh 2021', urlItem: '/cam-nang-tuyen-sinh-2021'},
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Thể Thao', url: 'the-thao' }],
      child: [
        { nameItem: 'Bóng Đá Việt Nam', urlItem: '/bong-da-viet-nam' },
        { nameItem: 'Bóng Đá Quốc Tế', urlItem: '/bong-da-quoc-te' },
        { nameItem: 'Bình Luận', urlItem: '/binh-luan' },
        { nameItem: 'Quần Vợt', urlItem: '/quan-vot' },
        { nameItem: 'Hậu Trường', urlItem: '/hau-truong' },
        { nameItem: 'Thể Thao Khác', urlItem: '/toan-canh-the-thao' },
        { nameItem: 'Sea Game 2019', urlItem: '/sea-games-2019' },
        { nameItem: 'Tin Chuyển Nhượng', urlItem: '/tin-chuyen-nhuong' },
        { nameItem: 'Thể Thao & Cộng Đồng', urlItem: '/the-thao-cong-dong' },
        { nameItem: 'Bóng Rổ', urlItem: '/bong-ro' },
        { nameItem: 'Sôi Động Cùng V-League', urlItem: '/soi-dong-cung-vleague' },
        { nameItem: 'Euro 2020', urlItem: '/euro-2020' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Sức Khoẻ', url: 'suc-khoe' }],
      child: [
        { nameItem: 'Làm Đẹp', urlItem: '/lam-dep' },
        { nameItem: 'Giới Tính', urlItem: '/gioi-tinh' },
        { nameItem: 'Khoẻ Đẹp Mỗi Ngày', urlItem: '/khoe-dep-moi-ngay' },
        { nameItem: 'Sống Vui Khoẻ', urlItem: '/song-vui-khoe' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Du Lịch', url: 'du-lich' }],
      child: [
        { nameItem: 'Khám Phá', urlItem: '/kham-pha' },
        { nameItem: 'A-Z', urlItem: '/a-z' },
        { nameItem: 'Săn Tour', urlItem: '/san-tour' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Công Nghệ', url: 'cong-nghe' }],
      child: [
        { nameItem: 'Sản Phẩm Mới', urlItem: '/san-pham-moi' },
        { nameItem: 'Kinh Nghiệm', urlItem: '/kinh-nghiem' },
        { nameItem: 'Ý Tưởng', urlItem: '/y-tuong' },
        { nameItem: 'Xu Hướng', urlItem: '/xu-huong' },
        { nameItem: 'Chuyển Đổi Số', urlItem: '/chuyen-doi-so' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Xe', url: 'xe' }],
      child: [
        { nameItem: 'Xe', urlItem: '/xe' },
        { nameItem: 'Thị Trường Xe', urlItem: '/thi-truong-xe' },
        { nameItem: 'Tư Vấn Xe', urlItem: '/tu-van-xe' },
        { nameItem: 'Đánh Giá Xe', urlItem: '/danh-gia-xe' },
        { nameItem: 'Khám Phá Xe', urlItem: '/kham-pha-xe' },
        { nameItem: 'Video', urlItem: '/video-xe' },
        { nameItem: 'Diễn Đàn Xe', urlItem: '/dien-dan-xe' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Game', url: 'game' }],
      child: [
        { nameItem: 'Tin Tức', urlItem: '/tin-tuc-game' },
        { nameItem: 'Lịch Thi Đấu', urlItem: '/lich-thi-dau' },
        { nameItem: 'Thủ Thuật', urlItem: '/thu-thuat' },
        { nameItem: 'Phòng Máy', urlItem: '/phong-may' },
        { nameItem: 'Công Nghệ Game', urlItem: '/cong-nghe' },
        { nameItem: 'Cộng Đồng', urlItem: '/cong-dong' },
        { nameItem: 'Video', urlItem: '/video-game' },
        { nameItem: 'ESport', urlItem: '/esports' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Thời Trang Trẻ', url: 'ttt' }],
      child: [

        { nameItem: 'Phong Cách', urlItem: '/phong-cach' },
        { nameItem: 'Sống Khoẻ', urlItem: '/song-khoe' },
        { nameItem: 'Chân Dung', urlItem: '/chan-dung' },
        { nameItem: 'Kỹ Năng Sống', urlItem: '/ky-nang-song' },
        { nameItem: 'Tận Hưởng', urlItem: '/tan-huong' },
        { nameItem: 'Tin Tức', urlItem: '/tin-tuc-ttt' },
        { nameItem: 'Video', urlItem: '/video' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
    {
      title: [{ name: 'Bạn Cần Biết', url: 'ban-can-biet' }],
      child: [
        { nameItem: 'Tuyển Dụng', urlItem: '/tuyen-dung' },
        { nameItem: 'Sản Phẩm', urlItem: '/san-pham' },
        { nameItem: 'Giải Trí', urlItem: '/giai-tri' },
        { nameItem: 'Dịch Vụ', urlItem: '/dich-vu' },
        { nameItem: 'Giải Thưởng', urlItem: '/giai-thuong' },
        { nameItem: 'Thông Báo', urlItem: '/thong-bao' },
        { nameItem: 'Miền Bắc', urlItem: '/mien-bac' },
        { nameItem: 'Miền Trung', urlItem: '/mien-trung' },
        { nameItem: 'Miền Nam', urlItem: '/mien-nam' },
      ],
      empty:[{ nameItem: '', urlItem: '' }],
    },
  ];

  RssData!: NewsRss;
  link: string = '';
  items!: RssItem;
  topNews: object[] = [];
  firstNews: object = {};
  url: string='';

  constructor(private _newsService: NewsService, public actRoute: ActivatedRoute) {
    /*Read Data*/
    this._newsService
      .getNews('https://thanhnien.vn/rss/'  + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',
        {
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        }
      )
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      });
    /*Read Data*/
  }
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.url = params.get('url')??'';
      // this.urlCategoriesItem = params.get('urlItem')??'';
      this.changeCategory(this.currentCategoryChoosen);
      this.changeCategoryItem(this.currentCategoryItemChoosen);
    })
  }
  changeCategory(_k: string) {
    this.currentCategoryChoosen = _k;
    this._newsService
      .getNews('https://thanhnien.vn/rss/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',
        {
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        }
      )
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      });
  }

  changeCategoryItem(_c: string) {
    this.currentCategoryItemChoosen = _c;
    this._newsService
      .getNews('https://thanhnien.vn/rss/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',
        {
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        }
      )
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      }).unsubscribe();
  }

  getItemVideo() {
    this._newsService
      .getNews(
        'https://video.thanhnien.vn/' +this.currentCategoryChoosen +'.rss',
        {
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        }
      )
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      });
  }
  getItems(): RssItem {
    this.firstNews = {};
    this.topNews = [];
    this._newsService
      .getNews('https://thanhnien.vn/rss/thoi-su/chinh-tri.rss', {
        headers: new HttpHeaders({
          Accept: 'application/xml',
        }),
        responseType: 'text',
      })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.items = this.convertToItem(result);
        });
      });
    return this.items;
  }

  private convertToItem(element: any): RssItem {
    let title = element.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
    let link = element.getElementsByTagName('link')[0].innerHTML;
    // let image=element.getElementsByTagName('link')[0].innerHTML

    // convert tags in description
    let desc = element
      .getElementsByTagName('description')[0]
      .innerHTML.slice(9, -3);
    let parser = new DOMParser();
    let html = parser.parseFromString(desc, 'text/html');

    //convert image link with full width
    let image = html.getElementsByTagName('img')[0].src;
    let indexc = image.indexOf('uploaded');
    image = 'https://image.thanhnien.vn/' + image.slice(indexc);

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
    let rssItem = new RssItem(title, description ?? '', link, image, date);
    return rssItem;
  }
}
function _k(_k: any) {
  throw new Error('Function not implemented.');
}

