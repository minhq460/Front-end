import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';

@Component({
  selector: 'app-video-news',
  templateUrl: './video-news.component.html',
  styleUrls: ['./video-news.component.scss']
})
export class VideoNewsComponent implements OnInit {

  constructor(private _navService: NavService) { }

  get itemVideo(){
    return this._navService.itemVideo;
  }

  ngOnInit(): void {
  }

}
