import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
   ` em {
      float: right;
      color: red;
    }`
  ]
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  mouseoverLogin: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  // returns data in an object
  login(data){
    this.authService.loginUser(data.userName, data.password)
    this.router.navigate(['events'])
  }

  cancel(){
    this.router.navigate(['events'])
  }
}
