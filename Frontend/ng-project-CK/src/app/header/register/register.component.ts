import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import Validation from './validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  alert: boolean=false;
  message: string = "";
  data: any;
  form!: FormGroup;
  submitted = false;
  constructor(public dialog: MatDialog,private userService: UserService, private route: Router, private formBuilder:FormBuilder){}

  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }
  ngOnInit(): void {
    this.userService.currentMessage.subscribe(message => this.message = message);

    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    // alert("Đăng ký thành công")
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  register(form: { value: { username: string; 
    email: string; fullName: string; 
    password: string; 
    confirmPassword: string; 
    phoneNumber: string; }; valid: any; }){
    if(this.form.invalid){
      alert("Đăng ký không thành công, vui lòng kiểm tra lại thông tin");
    }else{
      this.userService.addUser(new User(form.value.username,form.value.email,form.value.fullName,
        form.value.password,form.value.confirmPassword,form.value.phoneNumber,2));
      this.dialog.closeAll()
      this.openDialogLogin()
      console.log(this.register);
      alert("Đăng ký thành công")
      this.alert= true
      this.form.reset({})
  }
  }
  closeAlert(){
    this.alert = false
  }
}