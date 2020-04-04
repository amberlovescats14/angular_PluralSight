import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser
  
  loginUser(username: string, password: string){
    this.currentUser = {
      id: 1,
      username : username,
      firstName: "amber",
      lastName: "jones",
      password: password
    }
  }

  isAuthenticated(){
    return !!this.currentUser
  }

}