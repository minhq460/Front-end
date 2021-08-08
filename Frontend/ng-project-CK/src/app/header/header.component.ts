import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavService } from '../service/nav.service';
import { User } from 'src/app/model/user.model';
import { UserService } from '../service/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser!: User;
  currentIndex: number = -1;
  message: string = "";
  selectedItemId: any

  constructor(public dialog: MatDialog, public _navService:NavService, public _newsService:NewsService, private userService : UserService, private router:Router){}

  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }

  openDialogRegister(){
    this.dialog.open(RegisterComponent);
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.currentIndex.subscribe(value => this.currentIndex = value);
    this.userService.currentMessage.subscribe(message => this.message = message);

  }
  onLogOut(){
    this.userService.logout();
  }

  public onInput(keyword: any){
    console.log(keyword);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
    setTimeout(() => {
      this.router.navigate(['/search'], {queryParams:{'keyword': keyword}});
    }, 500);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
