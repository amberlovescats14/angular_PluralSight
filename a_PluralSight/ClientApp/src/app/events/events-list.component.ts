import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service'

declare let toastr
@Component({
  selector: 'events-list',
  template:
    `<div class="row">
    <button (click)="thumbnail.logFoo()">Click</button>
      <events-thumbnail class="col-5"
      #thumbnail
      *ngFor="let event of events"
      [event]="event"
      (click)="handleThumbnailClick(event.name)">
      </events-thumbnail>
    </div>`
})

export class EventsListComponent implements OnInit{
  events:any[]

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
     ){

  }

  //HOOK
  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

}