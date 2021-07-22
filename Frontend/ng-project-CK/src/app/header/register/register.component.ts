import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message: string = "";

  constructor(public dialog: MatDialog,private userService: UserService, private route: Router){}

  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }
  ngOnInit(): void {
    this.userService.currentMessage.subscribe(message => this.message = message);
  }
  register(form : NgForm){
    this.userService.addUser(new User(form.value.account,form.value.email,form.value.fullName,form.value.password,form.value.phoneNumber,2));
    this.route.navigate(['home']);
    console.log(this.register);
  }

}
