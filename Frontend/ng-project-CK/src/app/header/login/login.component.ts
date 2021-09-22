import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    public dialog: MatDialog,
    private userService: UserService, 
    private router:Router, 
    private formBuilder:FormBuilder,
    private authService: AuthenticationService,
    private alertify:AlertifyService,

    ){}

  openDialogRegister(){
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent);
  }

  ngOnInit(): void {
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
  onSubmit(loginForm: NgForm){
    this.submitted = true;
    // console.log(loginForm.value)
    const token = this.authService.authUser(loginForm.value)
    if(token){
      localStorage.setItem('token', token.username)
      
      console.log(localStorage.setItem('token', token.username))
      this.alertify.success("Đăng nhập thành công")
      this.dialog.closeAll()
      this.router.navigate(['home'])
    }else{
      this.alertify.error("Đăng nhập không thành công")
    }
    
  }
  
}
