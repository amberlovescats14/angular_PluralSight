import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EditEventComponent,
    CreateSessionComponent
} from './events/index'

export const appRoutes:Routes = [
  {path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/edit/:id', component: EditEventComponent,
      canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/session/:eventId', component: CreateSessionComponent},
  {path: 'events', component: EventsListComponent,
      resolve: {events: EventListResolver},},
  {path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  //!load children
  {path: 'user', loadChildren: './user/user.module#UserModule'}
]

//!can activate : whether a user can navigate to our route ((route gaurd))
