import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component'
import { EventService } from './events/shared/events.service'
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';


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
    Error404Component
    
  ],
  // browser router
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  //services should be imported and listed as providers
  providers: [EventService, ToastrService,EventRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
