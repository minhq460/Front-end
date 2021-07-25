import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsRss, RssItem } from '../model/news-rss';
import * as xml2js from 'xml2js';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  categories: any[] = [
    // {
    //   title: [{ name: 'Video', url: 'video', link:'video'}],
    //   child: [
    //     { nameItem: 'Thời Sự', urlItem:'video/thoi-su',  linkItem: '/thoi-su'},
    //     { nameItem: 'Phóng Sự', urlItem:'video/phong-su', linkItem: '/phong-su' },
    //     { nameItem: 'Giải Trí', urlItem:'video/giai-tri', linkItem: '/giai-tri' },
    //     { nameItem: 'Món Ngon', urlItem:'video/mon-ngon', linkItem: '/mon-ngon' },
    //     { nameItem: 'Thể Thao', urlItem:'video/video-the-theo', linkItem: '/video-the-thao' },
    //     { nameItem: 'Thế Giới', urlItem:'video/the-gioi', linkItem: '/the-gioi' },
    //     { nameItem: 'Trực Tuyến', urlItem:'video/truc-tuyen', linkItem: '/truc-tuyen' },
    //     { nameItem: 'Em Nhảy Ghen Cô Vy', urlItem:'video/em-nhay-ghen-co-vy', linkItem: '/em-nhay-ghen-co-vy' },
    //   ],
    //   empty:[{ nameItem: '', linkItem: '' }],
    // },
    {
      title: [{ name: 'Thời Sự', url: 'thoi-su', link:'rss/thoi-su' }],
      child: [
        { nameItem: 'Pháp Luật', urlItem:'thoi-su/phap-luat', linkItem: '/phap-luat' },
        { nameItem: 'Phóng Sự / Điều Tra', urlItem:'thoi-su/phong-su-dieu-tra', linkItem: '/phong-su-dieu-tra' },
        { nameItem: 'Quốc Phòng', urlItem:'thoi-su/quoc-phong', linkItem: '/quoc-phong' },
        { nameItem: 'Dân Sinh', urlItem:'thoi-su/dan-sinh', linkItem: '/dan-sinh' },
        { nameItem: 'Quyền Được Biết', urlItem:'thoi-su/quyen-duoc-biet', linkItem: '/quyen-duoc-biet' },
        { nameItem: 'Lao Động - Việc Làm', urlItem:'thoi-su/lao-dong-viec-lam', linkItem: '/lao-dong-viec-lam' },
        // { nameItem: 'Cần Biết', urlItem:'thoi-su/can-biet', linkItem: '/can-biet' },
        // { nameItem: 'Nghề Hot', urlItem:'thoi-su/nghe-hot', linkItem: '/nghe-hot' },
        // { nameItem: 'Kỹ Năng Tìm Viẹc', urlItem:'thoi-su/ki-nang-tim-viec', linkItem: '/ki-nang-tim-viec' },
        // { nameItem: 'Tuyển Dụng', urlItem:'thoi-su/tuyen-dung', linkItem: '/tuyen-dung' },
        // { nameItem: 'Săn Việc', urlItem:'thoi-su/san-viec', linkItem: '/san-viec' },
        { nameItem: 'Chính Trị', urlItem:'thoi-su/chinh-tri', linkItem: '/chinh-tri' },
        { nameItem: 'Đại Hội XIII', urlItem:'thoi-su/dai-hoi-xiii', linkItem: '/dai-hoi-xiii' },
        { nameItem: 'Tôi Đón Tết', urlItem:'thoi-su/toi-don-tet', linkItem: '/toi-don-tet' },
        // { nameItem: 'Vượt Qua Covid-19', urlItem:'thoi-su/vuot-qua-covid-19', linkItem: '/vuot-qua-covid-19' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Thế Giới', url: 'the-gioi', link:'rss/the-gioi' }],
      child: [
        { nameItem: 'Người VIệt Năm Châu', urlItem:'the-gioi/nguoi-viet-nam-chau', linkItem: '/nguoi-viet-nam-chau' },
        { nameItem: 'Góc Nhìn', urlItem:'the-gioi/goc-nhin', linkItem: '/goc-nhin' },
        { nameItem: 'Hồ Sơ', urlItem:'the-gioi/ho-so', linkItem: '/ho-so' },
        { nameItem: 'Quân Sự', urlItem:'the-gioi/quan-su', linkItem: '/quan-su' },
        { nameItem: 'Kinh Tế Thế Giới', urlItem:'the-gioi/kinh-te-the-gioi', linkItem: '/kinh-te-the-gioi' },
        { nameItem: 'Chuyện Lạ', urlItem:'the-gioi/chuyen-la', linkItem: '/chuyen-la' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Tài Chính - Kinh Doanh', url: 'tai-chinh-kinh-doanh', link:'rss/tai-chinh-kinh-doanh' }],
      child: [
        { nameItem: 'Chứng Khoáng', urlItem:'tai-chinh-kinh-doanh/chung-khoan', linkItem: '/chung-khoan' },
        { nameItem: 'Doanh Nhân', urlItem:'tai-chinh-kinh-doanh/doanh-nhan', linkItem: '/doanh-nhan' },
        { nameItem: 'Địa Ốc', urlItem:'tai-chinh-kinh-doanh/dia-oc', linkItem: '/dia-oc' },
        { nameItem: 'Tiêu Dùng', urlItem:'tai-chinh-kinh-doanh/tieu-dung', linkItem: '/tieu-dung' },
        { nameItem: 'Làm Giàu', urlItem:'tai-chinh-kinh-doanh/lam-giau', linkItem: '/lam-giau' },
        // { nameItem: 'Chính Sách - Phát Triển', urlItem:'tai-chinh-kinh-doanh/chinh-sach-phat-trien', linkItem: '/chinh-sach-phat-trien'},
        { nameItem: 'Ngân Hàng', urlItem:'tai-chinh-kinh-doanh/ngan-hang', linkItem: '/ngan-hang' },
        { nameItem: 'Doanh Nghiệp', urlItem:'tai-chinh-kinh-doanh/doanh-nghiep', linkItem: '/doanh-nghiep' },
        { nameItem: 'Kinh Tế Xanh', urlItem:'tai-chinh-kinh-doanh/kinh-te-xanh', linkItem: '/kinh-te-xanh' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Đời Sống', url: 'doi-song', link:'rss/doi-song' }],
      child: [
        { nameItem: 'Ẩm Thực', urlItem:'doi-song/am-thuc', linkItem: '/am-thuc' },
        { nameItem: 'Gia Đình', urlItem:'doi-song/gia-dinh', linkItem: '/gia-dinh' },
        { nameItem: 'Cộng Đồng', urlItem:'doi-song/cong-dong', linkItem: '/cong-dong' },
        { nameItem: 'Người Sống Quanh Ta', urlItem:'doi-song/nguoi-song-quanh-ta', linkItem: '/nguoi-song-quanh-ta' },
        { nameItem: 'Sống Xanh', urlItem:'doi-song/song-xanh', linkItem: '/song-xanh' },
        { nameItem: 'Gương Sáng Biên Cương', urlItem:'doi-song/guong-sang-bien-cuong', linkItem: '/guong-sang-bien-cuong' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Văn Hoá', url: 'van-hoa', link:'rss/van-hoa' }],
      child: [
        { nameItem: 'Câu Chuyện Văn Hoá', urlItem:'van-hoa/cau-chuyen', linkItem: '/cau-chuyen' },
        { nameItem: 'Thành Phố Tôi Yêu', urlItem:'van-hoa/thanh-pho-toi-yeu', linkItem: '/thanh-pho-toi-yeu' },
        { nameItem: 'Khảo Cứu', urlItem:'van-hoa/khao-cuu', linkItem: '/khao-cuu' },
        { nameItem: 'Xem - Nghe', urlItem:'van-hoa/xem-nghe', linkItem: '/xem-nghe' },
        { nameItem: 'Thương Nhớ Miền Trung', urlItem:'van-hoa/thuong-nho-mien-trung',  linkItem: '/thuong-nho-mien-trung'},
        { nameItem: 'Hà Nội Thành Phố Tôi Yêu', urlItem:'van-hoa/ha-noi-thanh-pho-toi-yeu', linkItem: '/ha-noi-thanh-pho-toi-yeu'},
        { nameItem: 'Sống Đẹp', urlItem:'van-hoa/song-dep', linkItem: '/song-dep' },
        { nameItem: 'Món Ngon Hà Nội', urlItem:'van-hoa/mon-ngon-ha-noi', linkItem: '/mon-ngon-ha-noi' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giải Trí', url: 'giai-tri', link:'rss/giai-tri' }],
      child: [
        { nameItem: 'Truyền Hình', urlItem:'giai-tri/truyen-hinh', linkItem: '/truyen-hinh' },
        { nameItem: 'Phim', urlItem:'giai-tri/phim', linkItem: '/phim' },
        { nameItem: 'Đời Nghệ Sĩ', urlItem:'giai-tri/doi-nghe-si', linkItem: '/doi-nghe-si' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giới Trẻ', url: 'gioi-tre', link:'rss/gioi-tre' }],
      child: [
        { nameItem: 'Sống - Yêu - Ăn - Chơi', urlItem:'gioi-tre/song-yeu-an-choi', linkItem: '/song-yeu-an-choi' },
        { nameItem: 'Thế Giới Mạng', urlItem:'gioi-tre/the-gioi-mang', linkItem: '/the-gioi-mang' },
        { nameItem: 'Kết Nối', urlItem:'gioi-tre/ket-noi', linkItem: '/ket-noi' },
        { nameItem: 'Đoàn - Hội', urlItem:'gioi-tre/doan-hoi', linkItem: '/doan-hoi' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giáo Dục', url: 'giao-duc', link:'rss/giao-duc' }],
      child: [
        { nameItem: 'Du Học', urlItem:'giao-duc/du-hoc', linkItem: '/du-hoc' },
        { nameItem: 'Chọn Nghề', urlItem:'giao-duc/chon-nghe', linkItem: '/chon-nghe' },
        { nameItem: 'Người Thầy', urlItem:'giao-duc/nguoi-thay', linkItem: '/nguoi-thay' },
        { nameItem: 'Chọn Trường', urlItem:'giao-duc/chon-truong', linkItem: '/chon-truong' },
        // { nameItem: 'Hộp Thư Tư Vấn 24/7', urlItem:'giao-duc/hop-thu-tu-van-24-7', linkItem: '/hop-thu-tu-van-24-7' },
        // { nameItem: ' Ôn Thi THPT Quốc Gia 2019', urlItem:'giao-duc/on-thi-thpt-quoc-gia-2019', linkItem: '/on-thi-thpt-quoc-gia-2019'},
        // { nameItem: 'Tra Cứu Điểm Thi 2021', urlItem:'giao-duc/tuyen-sinh/2021/tra-cuu', linkItem: '/tuyen-sinh/2021/tra-cuu'},
        // { nameItem: 'Tuyển Sinh 2021', urlItem:'giao-duc/tuyen-sinh/2021', linkItem: '/tuyen-sinh/2021' },
        { nameItem: 'Sức Khoẻ Học Đường', urlItem:'giao-duc/suc-khoe-hoc-duong', linkItem: '/suc-khoe-hoc-duong' },
        // { nameItem: 'Cẩm Nang Tuyển Sinh 2021', urlItem:'giao-duc/cam-nang-tuyen-sinh-2021', linkItem: '/cam-nang-tuyen-sinh-2021'},
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    // {
    //   title: [{ name: 'Thể Thao', url: 'the-thao', link:'the-thao' }],
    //   child: [
    //     { nameItem: 'Bóng Đá Việt Nam', urlItem:'the-thao/bong-da-viet-nam', linkItem: '/bong-da-viet-nam' },
    //     { nameItem: 'Bóng Đá Quốc Tế', urlItem:'the-thao/bong-da-quoc-te', linkItem: '/bong-da-quoc-te' },
    //     { nameItem: 'Bình Luận', urlItem:'the-thao/binh-luan', linkItem: '/binh-luan' },
    //     { nameItem: 'Quần Vợt', urlItem:'the-thao/quan-vot', linkItem: '/quan-vot' },
    //     { nameItem: 'Hậu Trường', urlItem:'the-thao/hau-truong', linkItem: '/hau-truong' },
    //     { nameItem: 'Thể Thao Khác', urlItem:'the-thao/toan-canh-the-thao', linkItem: '/toan-canh-the-thao' },
    //     { nameItem: 'Sea Game 2019', urlItem:'the-thao/sea-games-2019', linkItem: '/sea-games-2019' },
    //     { nameItem: 'Tin Chuyển Nhượng', urlItem:'the-thao/tin-chuyen-nhuong', linkItem: '/tin-chuyen-nhuong' },
    //     { nameItem: 'Thể Thao & Cộng Đồng', urlItem:'the-thao/the-thao-cong-dong', linkItem: '/the-thao-cong-dong' },
    //     { nameItem: 'Bóng Rổ', urlItem:'the-thao/bong-ro', linkItem: '/bong-ro' },
    //     { nameItem: 'Sôi Động Cùng V-League', urlItem:'the-thao/soi-dong-cung-vleague', linkItem: '/soi-dong-cung-vleague' },
    //     { nameItem: 'Euro 2020', urlItem:'the-thao/euro-2020', linkItem: '/euro-2020' },
    //   ],
    //   empty:[{ nameItem: '', linkItem: '' }],
    // },
    {
      title: [{ name: 'Sức Khoẻ', url: 'suc-khoe', link:'rss/suc-khoe' }],
      child: [
        { nameItem: 'Làm Đẹp', urlItem:'suc-khoe/lam-dep', linkItem: '/lam-dep' },
        { nameItem: 'Giới Tính', urlItem:'suc-khoe/gioi-tinh', linkItem: '/gioi-tinh' },
        { nameItem: 'Khoẻ Đẹp Mỗi Ngày', urlItem:'suc-khoe/khoe-dep-moi-ngay', linkItem: '/khoe-dep-moi-ngay' },
        { nameItem: 'Sống Vui Khoẻ', urlItem:'suc-khoe/song-vui-khoe', linkItem: '/song-vui-khoe' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Du Lịch', url: 'du-lich', link:'rss/du-lich' }],
      child: [
        { nameItem: 'Khám Phá', urlItem:'du-lich/kham-pha', linkItem: '/kham-pha' },
        { nameItem: 'A-Z', urlItem:'du-lich/a-z', linkItem: '/a-z' },
        { nameItem: 'Săn Tour', urlItem:'du-lich/san-tour', linkItem: '/san-tour' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Công Nghệ', url: 'cong-nghe', link:'rss/cong-nghe' }],
      child: [
        { nameItem: 'Sản Phẩm Mới', urlItem:'cong-nghe/san-pham-moi', linkItem: '/san-pham-moi' },
        { nameItem: 'Kinh Nghiệm', urlItem:'cong-nghe/kinh-nghiem', linkItem: '/kinh-nghiem' },
        { nameItem: 'Ý Tưởng', urlItem:'cong-nghe/y-tuong', linkItem: '/y-tuong' },
        { nameItem: 'Xu Hướng', urlItem:'cong-nghe/xu-huong', linkItem: '/xu-huong' },
        { nameItem: 'Chuyển Đổi Số', urlItem:'cong-nghe/chuyen-doi-so', linkItem: '/chuyen-doi-so' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    // {
    //   title: [{ name: 'Xe', url: 'xe', link:'xe' }],
    //   child: [
    //     { nameItem: 'Thị Trường Xe', urlItem:'xe/thi-truong-xe', linkItem: '/thi-truong-xe' },
    //     { nameItem: 'Tư Vấn Xe', urlItem:'xe/tu-van-xe', linkItem: '/tu-van-xe' },
    //     { nameItem: 'Đánh Giá Xe', urlItem:'xe/danh-gia-xe', linkItem: '/danh-gia-xe' },
    //     { nameItem: 'Khám Phá Xe', urlItem:'xe/kham-pha-xe', linkItem: '/kham-pha-xe' },
    //     // { nameItem: 'Video', urlItem:'xe/video-xe', linkItem: '/video-xe' },
    //     { nameItem: 'Diễn Đàn Xe', urlItem:'xe/dien-dan-xe', linkItem: '/dien-dan-xe' },
    //   ],
    //   empty:[{ nameItem: '', linkItem: '' }],
    // },
    // {
    //   title: [{ name: 'Game', url: 'game', link:'game' }],
    //   child: [
    //     { nameItem: 'Tin Tức', urlItem:'game/tin-tuc-game', linkItem: '/tin-tuc-game' },
    //     { nameItem: 'Lịch Thi Đấu', urlItem:'game/lich-thi-dau', linkItem: '/lich-thi-dau' },
    //     { nameItem: 'Thủ Thuật', urlItem:'game/thu-thuat', linkItem: '/thu-thuat' },
    //     { nameItem: 'Phòng Máy', urlItem:'game/phong-may', linkItem: '/phong-may' },
    //     { nameItem: 'Công Nghệ Game', urlItem:'game/cong-nghe', linkItem: '/cong-nghe' },
    //     { nameItem: 'Cộng Đồng', urlItem:'game/cong-dong', linkItem: '/cong-dong' },
    //     { nameItem: 'Video', urlItem:'game/video-game', linkItem: '/video-game' },
    //     { nameItem: 'ESport', urlItem:'game/esports', linkItem: '/esports' },
    //   ],
    //   empty:[{ nameItem: '', linkItem: '' }],
    // },
    // {
    //   title: [{ name: 'Thời Trang Trẻ', url: 'ttt', link:'rss/ttt' }],
    //   child: [
    //     { nameItem: 'Phong Cách', urlItem:'ttt/phong-cach', linkItem: '/phong-cach' },
    //     { nameItem: 'Sống Khoẻ', urlItem:'ttt/song-khoe', linkItem: '/song-khoe' },
    //     { nameItem: 'Chân Dung', urlItem:'ttt/chan-dung', linkItem: '/chan-dung' },
    //     { nameItem: 'Kỹ Năng Sống', urlItem:'ttt/ky-nang-song', linkItem: '/ky-nang-song' },
    //     { nameItem: 'Tận Hưởng', urlItem:'ttt/tan-huong', linkItem: '/tan-huong' },
    //     { nameItem: 'Tin Tức', urlItem:'ttt/tin-tuc-ttt', linkItem: '/tin-tuc-ttt' },
    //     // { nameItem: 'Video', urlItem:'ttt/video', linkItem: '/video' },
    //   ],
    //   empty:[{ nameItem: '', linkItem: '' }],
    // },
    {
      title: [{ name: 'Bạn Cần Biết', url: 'ban-can-biet', link:'rss/ban-can-biet' }],
      child: [
        { nameItem: 'Tuyển Dụng', urlItem:'ban-can-biet/tuyen-dung', linkItem: '/tuyen-dung' },
        { nameItem: 'Sản Phẩm', urlItem:'ban-can-biet/san-pham', linkItem: '/san-pham' },
        { nameItem: 'Giải Trí', urlItem:'ban-can-biet/giai-tri', linkItem: '/giai-tri' },
        { nameItem: 'Dịch Vụ', urlItem:'ban-can-biet/dich-vu', linkItem: '/dich-vu' },
        { nameItem: 'Giải Thưởng', urlItem:'ban-can-biet/giai-thuong', linkItem: '/giai-thuong' },
        { nameItem: 'Thông Báo', urlItem:'ban-can-biet/thong-bao', linkItem: '/thong-bao' },
        { nameItem: 'Miền Bắc', urlItem:'ban-can-biet/mien-bac', linkItem: '/mien-bac' },
        { nameItem: 'Miền Trung', urlItem:'ban-can-biet/mien-trung', linkItem: '/mien-trung' },
        { nameItem: 'Miền Nam', urlItem:'ban-can-biet/mien-nam', linkItem: '/mien-nam' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
  ];

  currentCategoryChoosen: any = 'rss/home';
  currentCategoryItemChoosen: any='';

  RssData!: NewsRss;

  detailNews!: any[];
  items: RssItem[] = [];
  url: string='';
  api:string='https://api-cors-cross.herokuapp.com/api?url='

  constructor(private _newsService: NewsService, public actRoute: ActivatedRoute, private _http: HttpClient) {
    /*Read Data*/
    this._newsService.getNews('https://thanhnien.vn/'  + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
        headers: new HttpHeaders({
          Accept: 'application/xml',
          }),
          responseType: 'text',
        })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          console.log(result)
          this.RssData=result;
        });
      });

  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.url = params.get('url')??'';
      // this.urlItem = params.get('urlItem')??'';
      this.changeCategory(this.currentCategoryChoosen);
      this.changeCategoryItem(this.currentCategoryItemChoosen);
      // this.getItems;
    })

  }


  changeCategory(_k: string) {
    this.currentCategoryChoosen = _k;
    this._newsService.getNews('https://thanhnien.vn/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      });
    
  }

  changeCategoryItem(_c: string) {
    this.currentCategoryItemChoosen = _c;
    this._newsService.getNews('https://thanhnien.vn/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
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

  getItemHome(): RssItem[] {
    this._newsService.getNews('https://thanhnien.vn/rss/home.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');

        for (let i = 0; i < itemsArr.length; i++) {
          this.items.push(this.convertToItem(itemsArr[i]))
        }
      });
    return this.items
  }

  getItemVideo(): RssItem[] {
    this._newsService.getNews('https://video.thanhnien.vn/rss/home.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');
        for (let i = 0; i <itemsArr.length; i++) {
          this.items.push(this.convertToItem(itemsArr[i]))}
      });
    return this.items
  }

  getItemWorld(): RssItem[] {
    this._newsService.getNews('https://thanhnien.vn/rss/the-gioi.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');
        for (let i = 0; i <itemsArr.length; i++) {
          this.items.push(this.convertToItem(itemsArr[i]))}
      });
    return this.items
  }

  private convertToItem(ele: any): RssItem {
      let title = ele.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
      let linkDetail = ele.getElementsByTagName('link')[0].innerHTML;
      // description tag contain diversity element need to parse
      let desc = ele.getElementsByTagName('description')[0].innerHTML.slice(9, -3);
      let parser = new DOMParser();
      let html = parser.parseFromString(desc, "text/html");
      //convert image link with full width

      let linkImg = html.getElementsByTagName('img')[0].src;
      let indexc = linkImg.indexOf('uploaded');
      linkImg = "https://image.thanhnien.vn/" + linkImg.slice(indexc);
      // get pubdate
      let pubDate = ele.getElementsByTagName('pubDate')[0].innerHTML.trim();
      let date: Date = new Date(pubDate);


      // get text desciption need to remove orther text content
      let body = html.getElementsByTagName('body')[0];
      let rem = html.getElementsByTagName('div')[0];
      if (rem != null) {
        rem.remove();
      }
      let description = body.textContent;
      // object item
      let itm: RssItem = new RssItem(title, description ?? '', linkDetail, linkImg, date);
      // console.log(itm.getTime())
      return itm;
  }
}
