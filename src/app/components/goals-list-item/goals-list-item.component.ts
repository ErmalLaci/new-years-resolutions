import { Component, Input, OnInit } from '@angular/core';
import { GroupGoal } from 'src/app/models/group';
import { GoalsService } from 'src/app/shared/goals.service';

@Component({
  selector: 'app-goals-list-item',
  template: `
    <div class="goal-container">
      <div class="goal-row">
        Goal: {{ goal.name }}
      </div>
      <div class="goal-row">
        Description: {{ goal.description }}
      </div>
      <div class="goal-row">
        Goal for: {{ goal.user.name }}
      </div>
      <div class="goal-row">
        Start date: {{ getFormattedDate(goal.startDate) }}
      </div>
      <div class="goal-row">
        End Date: {{ getFormattedDate(goal.endDate) }}
      </div>
      <div class="goal-row progression-row">
        Current Progression: 
          {{ goal.currentProgression || 0 }}
          <div>
            <button (click)="increaseProgression()">+</button>
            <button (click)="decreaseProgression()">-</button>
          </div>
      </div>
      <button class="goal-row" color="warn" type="button" (click)="removeGoal()">Remove Goal</button>
    </div>
  `,
  styleUrls: ['./goals-list-item.component.scss']
})
export class GoalsListItemComponent implements OnInit {

  @Input() goal: GroupGoal;
  @Input() goals: GroupGoal[];
  @Input() groupId: string;
  @Input() index: number;

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
  }

  removeGoal() {
    console.log('remove');
    this.goalsService.removeGoal(this.groupId, this.goal);
  }

  getFormattedDate(date: Date): string {
    return new Date(date).toDateString();
  }

  increaseProgression() {
    this.goalsService.increaseProgression(this.groupId, this.index, this.goals);
  }

  decreaseProgression() {
    this.goalsService.decreaseProgression(this.groupId, this.index, this.goals);
  }

}
