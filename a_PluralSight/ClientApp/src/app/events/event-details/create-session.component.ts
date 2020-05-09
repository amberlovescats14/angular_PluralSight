import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, EventService } from '../shared';

@Component({
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
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200), this.restrictedWords(['foo', 'bar'])])
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
   //! custom validators // A function that returns a function
   private restrictedWords = (wordsArr) => 
            (control: FormControl): {[key:string]:any} => {
              if(!wordsArr) return null;
              let invalidWords = 
              wordsArr.map(w => control.value.includes(w) ? w : null)
              .filter(w => w != null)
              return invalidWords.lenth > 0 ? {'restrictedWords': invalidWords.join(', ')} : null
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
     this.event.sessions.unshift(session)
     this.router.navigate(['/events'])

   }
}
