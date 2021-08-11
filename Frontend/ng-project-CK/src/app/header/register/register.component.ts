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
        fullname: ['', Validators.required],
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
        acceptTerms: [false, Validators.requiredTrue]
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

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  register(form : NgForm){
    this.userService.addUser(new User(form.value.account,form.value.email,form.value.fullName,form.value.password,form.value.phoneNumber,2));
    this.route.navigate(['home']);
    console.log(this.register);
    if(form.valid){
      this.data = form.value;
    }
  }

}
