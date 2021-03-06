import { IEvents } from './shared/event.model';
import { Component, Input, Output} from '@angular/core'
import { EventEmitter } from 'events';

//if something might be null, {{event?.location}}
// or use *ngIf
// [hidden] = "event?.onlineUrl"

@Component({
  selector: 'events-thumbnail',
  template:
  //routerLink makes the element a link
    `<div [routerLink]="['/events', event.id]">
    <h1 class="pad-left">{{event?.name  | uppercase}}</h1>
    <hr>
    <div class="well">
    <h4 [ngClass]="getStartTimeClass()">{{event.date}}</h4>
    <div [ngSwitch]="event?.time" [ngClass]="{green: event.time === '8:00 am', bold: event.time === '10:00 am'}">
    <span *ngSwitchCase="'8:00 am'">{{event.time}} Early Start</span>
    <span *ngSwitchCase="'10:00 am'">{{event.time}} Late Start</span>
    <span *ngSwitchDefault>{{event.time}} Normal Start</span> <br>
    {{event.location.city}}
    <a href="/events/edit/{{event.id}}"> <button>Edit</button></a>
    <a href="/events/session/{{event.id}}"> <button>Add Session</button></a>
    </div>
    <li *ngFor="let session of event.sessions">
      {{session.name}} ::
      {{session.presenter}}
    </li>
    </div>
      </div> `,
  styles: [`
      .pad-left { margin-left: 60px;}
      .well { color: red}
      .green { color: green !important}
      .bold {color: yellow}
      .pink {color: pink}
      `]

})

export class EventsThumbnailComponent {

  @Input() event: IEvents;
  someProperty: any = "some value";

  logFoo() {
    console.log("foo")
  }
  getStartTimeClass(): any {
    const isEarly = this.event && this.event.time === '8:00 am'
    return {pink: isEarly, bold: isEarly}
    // you can also return a string or array
  }


}

// if you do style and ngStyle. The ng will be added on top of regular