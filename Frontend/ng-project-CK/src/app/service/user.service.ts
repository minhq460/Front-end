import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  addUser(user: User){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      // thêm user từ onsubmit() method
      // ... là toán tử cho phép sử dụng phần tử đã qua chỉnh sửa
      users = [user, ...users]
    }else{
      users = [user]
    }
    localStorage.setItem('Users', JSON.stringify(users))

  }

}
