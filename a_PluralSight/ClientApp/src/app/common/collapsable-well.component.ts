import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
  <h4>
    <ng-content select="[well-title]"></ng-content>
  </h4>
  <ng-content *ngIf="visible" select=".body"></ng-content>
  </div>
  `
})
export class CollapsableWellComponent implements OnInit {
  visible: boolean = true

  constructor() { }

  ngOnInit(): void { }

  toggleContent(){
    this.visible = !this.visible
  }
}
