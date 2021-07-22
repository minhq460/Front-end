import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavService } from '../service/nav.service';
import { User } from 'src/app/model/user.model';
import { UserService } from '../service/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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

  constructor(public dialog: MatDialog, public _navService:NavService, private userService : UserService){}
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

}
