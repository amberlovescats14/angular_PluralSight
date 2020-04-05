import { EventService } from './shared/events.service';
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

  constructor(
     private router: Router,
     private authService: AuthService,
     private eventService: EventService) {
    
  }
  saveEvent(data){
    console.log("Form data: ", data)
    this.eventService.saveEvent(data)
    this.isDirty = false;
    this.router.navigate(['/events'])
  }
  cancel(){
    this.router.navigate(['/events'])
  }
}

