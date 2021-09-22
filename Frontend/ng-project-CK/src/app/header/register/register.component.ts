import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { AlertifyService } from 'src/app/service/alertify.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  submitted = false;

  constructor(
    public dialog: MatDialog,
    private userService: UserService, 
    private formBuilder:FormBuilder,
    private alertify:AlertifyService,
    ){}

  ngOnInit(): void {
    this.createRegisterForm()

  }

  openDialogLogin(){
    this.dialog.closeAll();
    this.dialog.open(LoginComponent);
  }

  createRegisterForm(){
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
            Validators.minLength(8),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.match('password', 'confirmPassword')
      }
    );
  }
  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors.matching) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  get f() { return this.form.controls }

  onSubmit() {
    this.submitted = true;
  
    if(this.form.invalid){
      this.alertify.error("Vui lòng kiểm tra lại thông tin");
    }else{
      this.userService.addUser(this.userData())
      this.form.reset()
      this.submitted = false
      this.alertify.success("Đăng ký thành công, bạn có thể đăng nhập")
      this.dialog.closeAll()
      this.openDialogLogin()
    }
  }
  
  userData(): User {
    return this.user = {
      username: this.username.value,
      email: this.email.value,
      fullName: this.fullName.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
    }
  }
  get username() {
    return this.form.get('username') as FormControl;
  }
  get email() {
    return this.form.get('email') as FormControl;
  }
  get fullName() {
    return this.form.get('fullName') as FormControl;
  }
  get password() {
    return this.form.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }
  
}