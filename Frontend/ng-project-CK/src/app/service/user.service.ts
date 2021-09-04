import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  a: User = new User("truonguchiha","harimon21@gmail.com","truong","123","123","0934111111",1);
  b: User = new User("trungsasuke","trung123@gmail.com","trung","123","123","0974445551",2);
  c: User = new User("chauquan","chauquan666@gmail.com","Châu Vũ Minh Quân","12345678","12345678","0397987561",2)

  loginUser: User = new User("","","","","","",2);
  index: number = -1;
  message: string = "";

  userList: Array<User> = [
    this.a,
    this.b
  ]

  private currentUserObserver = new BehaviorSubject<User>(this.loginUser);
  currentUser = this.currentUserObserver.asObservable();

  private currentIndexObserver = new BehaviorSubject<number>(this.index);
  currentIndex = this.currentIndexObserver.asObservable();

  private currentMessageObserver = new BehaviorSubject<string>(this.message);
  currentMessage = this.currentMessageObserver.asObservable();

  private UserListObserver = new BehaviorSubject<Array<User>>(this.userList);
  currentUserList = this.UserListObserver.asObservable();

  constructor() {

   }

  login(username:string,password:string){
    let stateLogin = 0;
    console.log("list user:",this.userList);

    this.userList.forEach(value => {
      if (username === value.username) {
        if (password === value.password) {
          this.loginUser = value;
          this.index = this.userList.indexOf(value);
          this.currentUserObserver.next(this.loginUser);
          this.currentIndexObserver.next(this.index);
          this.currentMessageObserver.next("login susscess");
          stateLogin = 1;
        }
      }
    });
    if (stateLogin === 0) {
      return false;
    } else return true;
  }

  logout(){
    this.loginUser = new User("","","","","","",2);
    this.index = -1;
    this.currentUserObserver.next(this.loginUser);
    this.currentIndexObserver.next(this.index);
    this.currentMessageObserver.next("logout susscess");
  }

  addUser(user: User){
    this.userList.push(user);
    console.log("user added");
    this.UserListObserver.next(this.userList);
  }

  removeUser(user: User){
    this.userList.forEach((value,index) => {
      if (value.getUsername == user.getUsername) {
        console.log(user.getUsername, "is removed");
        this.userList.splice(index,1);
      }
    });
    this.UserListObserver.next(this.userList);
    console.log(this.userList);

  }

  editUser(user: User){
    this.loginUser = user;
    if (this.index !== -1) {
      this.userList[this.index] = user;
    }
    this.currentUserObserver.next(this.loginUser);
    this.currentMessageObserver.next("edited");
    this.UserListObserver.next(this.userList);
  }

}
