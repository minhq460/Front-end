import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavService } from '../service/nav.service';
import { User } from 'src/app/model/user';
import { UserService } from '../service/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser!: string|null;
  currentIndex: number = -1;
  message: string = "";
  selectedItemId: any

  constructor(public dialog: MatDialog, public _navService:NavService, public _newsService:NewsService, private userService : UserService, private router:Router){}

  openDialogLogin(){
    this.dialog.closeAll()
    this.dialog.open(LoginComponent);
  }

  openDialogRegister(){
    this.dialog.closeAll()
    this.dialog.open(RegisterComponent);
  }
  openDialogChangePass(){
    this.dialog.closeAll();
    this.dialog.open(ChangePasswordComponent);
  }
  ngOnInit(): void {
    

  }
  loggined(){
    this.currentUser = localStorage.getItem('token');
    return this.currentUser;
  }
  onLogOut(){
    return localStorage.removeItem('token');
    // this.userService.logout();
  }

  public onInput(keyword: any){
    console.log(keyword);
    
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
function MatMenuTrigger(MatMenuTrigger: any) {
  throw new Error('Function not implemented.');
}

