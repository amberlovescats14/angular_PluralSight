import { Component, Input, Output} from '@angular/core'
import { EventEmitter } from 'events';


@Component({
  selector: 'events-thumbnail',
  template:
    `<div>
    <h1>Upcoming Angular Events </h1>
    <hr>
    <h2>{{event.name}}</h2>
      </div> `

})

export class EventsThumbnailComponent {

  @Input() event: any;
  someProperty: any = "some value";

  logFoo() {
    console.log("foo")
  }


}