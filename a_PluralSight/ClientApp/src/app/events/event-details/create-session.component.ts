import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, EventService, restrictedWords } from '../shared';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    .error {
      background: red
    }
  `]
})
export class CreateSessionComponent implements OnInit {
  newSession: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();

  event: any

  constructor(
    private activatedRouter: ActivatedRoute,
     private eventService: EventService,
     private router: Router) { 

     }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200), restrictedWords(['foo', 'bar'])])
    this.newSession = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    })


    let reqID = this.activatedRouter.snapshot.paramMap.get('eventId')

    this.event = this.eventService.getEventById(Number(reqID))
   }


   saveSession(data){
     let session: ISession = {
       id: undefined,
       name: data.name,
       duration: Number(data.duration),
       level: data.level,
       presenter: data.presenter,
       abstract: data.abstract,
       voters: []
     }
    //  this.event.sessions.unshift(session)
    //  this.router.navigate(['/events'])
    this.saveNewSession.emit(session)
   }

   handleCancel(){
     this.cancelNewSession.emit(false)
   }
}
