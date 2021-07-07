import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedItemId: any

  constructor(public dialog: MatDialog, public _navService:NavService){}
  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }

  openDialogRegister(){
    this.dialog.open(RegisterComponent);
  }

  // getChangeCategory!: (k: any) => void;

  get categories(){
    return this._navService.categories;
  }

  get changeCategory(){
    return this._navService.changeCategory;
  }
  // get getNews(){
  //   return this._newsService.getNews;
  // }
  ngOnInit(): void {

  }

}
