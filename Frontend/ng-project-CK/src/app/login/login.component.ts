import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/service/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser : User | undefined;
  currentIndex: number = -1;
  message: string = "";

  constructor(public dialog: MatDialog,private userService: UserService, private route:Router){}

  openDialogRegister(){
    this.dialog.open(RegisterComponent);
  }
  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.currentIndex.subscribe(value => this.currentIndex = value);
    this.userService.currentMessage.subscribe(message => this.message = message);
  }
  login(form: NgForm){
    console.log("inside login method");

    console.log(form.value.email,form.value.password);
    let state = this.userService.login(form.value.email,form.value.password);
    console.log(this.currentUser);
    console.log(this.currentIndex);
    console.log(this.message);
    if (state) {
      this.route.navigate(['home'])
    }
  }
}
