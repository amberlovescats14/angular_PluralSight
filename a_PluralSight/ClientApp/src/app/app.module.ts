import { NgModule } from '@angular/core';
'./events/event-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EditEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EditEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
    
  ],
  // browser router
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  //services should be imported and listed as providers
  providers: [
    EventService,
     ToastrService,
     EventRouteActivator,
     //! This is a route gaurd
     {
       provide: 'canDeactivateCreateEvent',
       useValue: checkDirtyState
     },
     EventListResolver,
     AuthService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//!checking dirty state. takes in component
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
