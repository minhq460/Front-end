import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  currentUser!: User;
  currentIndex: number = -1;
  message: string = "";

  constructor(
    private userService: UserService, 
    private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void {
    
  }
  openDialogChangePass(){
    this.dialog.closeAll();
    this.dialog.open(ChangePasswordComponent);
  }
  changePasswordAccount(form : NgForm){
    let oldPassWord = form.value.oldPassWord;
    let newPassWord = form.value.newPassWord;
    let retypePassWord = form.value.retypePassWord;

    console.log(newPassWord, retypePassWord, newPassWord === retypePassWord);


    // if (oldPassWord === this.currentUser.getPassword) {
    //   if (newPassWord === retypePassWord) {
    //     this.userService.editUser(new User(this.currentUser.username,this.currentUser.email,this.currentUser.fullName,
    //           this.currentUser.password,this.currentUser.confirmPassword,this.currentUser.phoneNumber,2));
    //     this.route.navigate(['/home']);
    //   } else {
    //     this.route.navigate(['EditAccount']);
    //   }
    // } else {
    //   this.route.navigate(['EditAccount']);
    // }
  }

}
