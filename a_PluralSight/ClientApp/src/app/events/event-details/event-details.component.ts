import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from "@angular/router";
import { IEvents } from './../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px }
    .event-img { height: 100px }
  `]
})

export class EventDetailsComponent implements OnInit{
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

}