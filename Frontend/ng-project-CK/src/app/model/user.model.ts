
export class User {
  username: string;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  role: number;
  constructor(username: string, email: string, fullName: string, password: string, confirmPassword: string, phoneNumber: string, role: number){
    this.username = username;
    this.email = email;
    this.fullName = fullName;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.phoneNumber = phoneNumber;
    this.role = role;
  }


  public get getUsername() : string {
    return this.username;
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

  public get getConfirmPassword() : string {
    return this.confirmPassword;
  }

  public get getPhoneNumber() : string {
    return this.phoneNumber;
  }

  public get getRole() : number {
    return this.role;
  }

  public setUsername(username: string){
    this.username = username;
  }
  public setEmail(email: string){
    this.email = email;
  }
  public setPassword(password: string){
    this.password = password;
  }
  public setConfirmPassword(confirmPassword: string){
    this.password = confirmPassword;
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
