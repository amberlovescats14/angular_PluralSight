import { EventService } from './shared/events.service';
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { map } from 'rxjs/operators'


@Injectable()
export class EventListResolver implements Resolve<any>{
  
  constructor(private eventService: EventService){}
  //!RESOLVER
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}