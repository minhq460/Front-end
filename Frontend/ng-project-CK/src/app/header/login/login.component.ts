import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser : User | undefined;
  currentIndex: number = -1;
  message: string = "";
  form!: FormGroup;

  constructor(public dialog: MatDialog,private userService: UserService, private route:Router, private formBuilder:FormBuilder){}

  openDialogRegister(){
    this.dialog.open(RegisterComponent);
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.userService.currentIndex.subscribe(value => this.currentIndex = value);
    this.userService.currentMessage.subscribe(message => this.message = message);
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
      
    );
  }
  login(form: { value: { username: string; password: string; }; valid: any; }){
    console.log("inside login method");

    console.log(form.value.username,form.value.password);
    let state = this.userService.login(form.value.username,form.value.password);
    console.log(this.currentUser);
    console.log(this.currentIndex);
    console.log(this.message);
    if (state) {
      this.route.navigate(['home'])
      this.dialog.closeAll()
    }
  }
}
