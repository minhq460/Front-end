import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(public dialog: MatDialog){}

  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }
  ngOnInit(): void {
  }

}
