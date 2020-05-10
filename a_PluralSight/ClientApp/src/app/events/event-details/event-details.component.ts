import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from "@angular/router";
import { IEvents, ISession } from './../shared/event.model';
@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px }
    .event-img { height: 100px }
    a { cursor: pointer }
  `]
})

export class EventDetailsComponent implements OnInit{
  addMode:boolean = false;
  //the id of the page will be in the url
  event: IEvents
  
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ){

  }

  ngOnInit(){
    //im not sure why u havee to put the plus to cast it
    this.event = 
      this.eventService.getEventById(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = !this.addMode
  }

  saveSession(session: ISession) {
     const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
     session.id = nextId +1;
     this.event.sessions.push(session)
     this.eventService.updateEvent(this.event)
     this.addMode = false;
  }

  cancelSession(){
    this.addMode = false;
  }
}