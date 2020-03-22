import { EventService } from './../shared/events.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEventById(route.params['id'])
    if(!eventExists) this.router.navigate(['/404'])
    return eventExists
  }
}