import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string
  visibleSession: ISession[] = []
  constructor() { }

  ngOnChanges(): void {
    if(this.sessions) this.filterSessions(this.filterBy);
  }
  
  filterSessions(filter){
    if(filter === 'all') this.visibleSession = [...this.sessions]
    else {
      this.visibleSession = this.sessions.filter(s => s.level.toLowerCase() == filter)
    }
  }
}

