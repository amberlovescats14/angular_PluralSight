import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../user/auth.service';
import { IEvents } from './shared/event.model'
import { EventService } from './shared';

@Component({
  templateUrl: './edit-event.component.html',
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

export class EditEventComponent implements OnInit {

  isDirty: boolean = true
  // event: IEvents
  event: any

  constructor(
     private router: Router,
     private authService: AuthService,
     private eventService: EventService,
     private activatedRoute: ActivatedRoute
     ) {
    
  }
  ngOnInit(){
    let reqID = this.activatedRoute.snapshot.paramMap.get('id')

    console.log("param: ", reqID)
    this.event = this.eventService.getEventById(Number(reqID))

    // hard coded edit
    // this.event = {
    //   id: 1,
    //   name: 'Church',
    //   date: new Date('03/08/1987'),
    //   time: '10am',
    //   price: 799.99,
    //   location: {
    //     address: '123 olph dr',
    //     city: 'selma',
    //     country: 'India'
    //   },
    //   onlineUrl: '',
    //   imageUrl: '',
    //   sessions: []
    // }
  }
  saveEvent(data){
    data.id = 1
    this.eventService.saveEditEvent(data)
    this.isDirty = false;
    this.router.navigate(['/events'])
  }
  cancel(){
    this.router.navigate(['/events'])
  }
}

