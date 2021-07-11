import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedItemId: any

  constructor(public dialog: MatDialog){}


  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }

  openDialogRegister(){
    this.dialog.open(RegisterComponent);
  }

  ngOnInit(): void {

  }

}
