import { Component, Input, Output} from '@angular/core'
import { EventEmitter } from 'events';

//if something might be null, {{event?.location}}
// or use *ngIf
// [hidden] = "event?.onlineUrl"

@Component({
  selector: 'events-thumbnail',
  template:
    `<div>
    <h1 class="pad-left">{{event.name}} </h1>
    <hr>
    <div class="well">
    <h4>{{event.date}}</h4>
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
      `]

})

export class EventsThumbnailComponent {

  @Input() event: any;
  someProperty: any = "some value";

  logFoo() {
    console.log("foo")
  }


}