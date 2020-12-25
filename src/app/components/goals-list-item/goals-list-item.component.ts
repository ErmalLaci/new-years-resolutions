import { Component, Input, OnInit } from '@angular/core';
import { GroupGoal } from 'src/app/models/group';

@Component({
  selector: 'app-goals-list-item',
  template: `
    <p>
      goals-list-item works!
    </p>
  `,
  styleUrls: ['./goals-list-item.component.scss']
})
export class GoalsListItemComponent implements OnInit {

  @Input() goal: GroupGoal;
  constructor() { }

  ngOnInit(): void {
  }

}
