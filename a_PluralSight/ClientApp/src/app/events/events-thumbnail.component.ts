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
    <h1 class="pad-left">{{event.name}} </h1>
    <hr>
    <div class="well">
    <h4 [ngClass]="getStartTimeClass()">{{event.date}}</h4>
    <div [ngSwitch]="event?.time" [ngClass]="{green: event.time === '8:00 am', bold: event.time === '10:00 am'}">
    <span *ngSwitchCase="'8:00 am'">{{event.time}} Early Start</span>
    <span *ngSwitchCase="'10:00 am'">{{event.time}} Late Start</span>
    <span *ngSwitchDefault>{{event.time}} Normal Start</span>
    </div>
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

  @Input() event: any;
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