import { Component, Input } from "@angular/core";

@Component({
  selector: 'events-thumbnail',
  template: `<div>
    <h1>Upcoming Angular Events </h1>
    <hr>
    <h2>{{event.name}}</h2>
</div> `

})

export class EventsThumbnailComponent {

  @Input() event: any;

}