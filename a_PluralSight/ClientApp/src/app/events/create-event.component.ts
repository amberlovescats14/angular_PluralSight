import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../user/auth.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {
      float: right;
      color: yellow
    }
    .error {
      color: red
    }
  `]
})

export class CreateEventComponent {

  isDirty: boolean = true
  newEvent: FormGroup

  constructor(private router: Router, private authService: AuthService) {
    
  }

  saveEvent(data){
    console.log("Form data: ", data)
  }
  cancel(){
    this.router.navigate(['/events'])
  }
}

