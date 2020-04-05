import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  templateUrl: './profile.component.html',
  styles : [`
    em {
      float: right;
      color: yellow
    }
    .error input {
      background: red
    }
  `]
})

//! REACTIVE FORMS
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  firstName: FormControl
  lastName: FormControl

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('^[a-zA-z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }

  saveProfile(data){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(data.firstName, data.lastName)
      this.router.navigate(['events'])
    }
  }

  validateFirstName() : boolean {
    // console.log(this.firstName.invalid)
    return this.firstName.invalid && this.firstName.touched
  }

  validateLastName() : boolean {
     return this.lastName.invalid && this.lastName.touched
  }

  validationPatternCheck() : boolean {
      console.log(this.firstName.errors)
      return this.validateFirstName() && this.firstName.errors.pattern

  }


}