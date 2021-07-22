
export class User {
  account: string;
  email: string;
  fullName: string;
  password: string;
  phoneNumber: string;
  role: number;
  constructor(account: string, email: string, fullName: string, password: string, phoneNumber: string, role: number){
    this.account = account;
    this.email = email;
    this.fullName = fullName;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.role = role;
  }


  public get getAccount() : string {
    return this.account;
  }

  public get getEmail() : string {
    return this.email;
  }

  public get getFullName() : string {
    return this.fullName;
  }

  public get getPassword() : string {
    return this.password;
  }

  public get getPhoneNumber() : string {
    return this.phoneNumber;
  }


  public get getRole() : number {
    return this.role;
  }


  public setAccount(account: string){
    this.account = account;
  }
  public setEmail(email: string){
    this.email = email;
  }
  public setPassword(password: string){
    this.password = password;
  }
  public setFullName(fullName: string){
    this.fullName = fullName;
  }
  public setPhoneNumber(phoneNumber: string){
    this.phoneNumber = phoneNumber;
  }

  public setRole(role : number) {
    this.role = role;
  }

}
