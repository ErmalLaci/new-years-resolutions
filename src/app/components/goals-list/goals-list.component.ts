import { Component, Input, OnInit } from '@angular/core';
import { GroupGoal } from 'src/app/models/group';

@Component({
  selector: 'app-goals-list',
  template: `
    <div>
      goals-list works!
      <app-goals-list-item *ngFor="let goal of goals" [goal]="goal"></app-goals-list-item>
    </div>
  `,
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {

  @Input() goals: GroupGoal[];

  constructor() { }

  ngOnInit(): void {
  }

}
