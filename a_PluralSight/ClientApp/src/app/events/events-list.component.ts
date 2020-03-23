import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../common/toastr.service'
// import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


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
  events:any

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
     ){ }

  //HOOK
  ngOnInit(){
    // this.events = this.eventService.getEvents().subscribe((events)=> {
    //   this.events = events
    // })

    //! usinig resolver isntead
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

}