import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template:
    `<div>
      <events-thumbnail #thumbnail
      [event]="event1"></events-thumbnail>
      {{thumbnail.someProperty}}
      <button (click)="thumbnail.logFoo()">Click</button>
    </div>`
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular',
    date: '10/31/2006',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '17162 Irongate Rail',
      city: 'San Antonio'
    }
  }

}