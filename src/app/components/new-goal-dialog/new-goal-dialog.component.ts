import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';

import { GoalsService } from 'src/app/shared/goals.service';
import { NewGoalDialogData } from '../../models/dialog-data';

@Component({
  selector: 'app-new-goal-dialog',
  template: `
    <h1 mat-dialog-title>Create new goal in group: {{ dialogData.groupName }}</h1>
    <div mat-dialog-content class="form-container" [formGroup]="this.goalsService.form">
      <span class="display-name">Goal for {{ dialogData.userName }}</span>
        <mat-form-field appearance="fill">
          <mat-label>Goal:</mat-label>
          <input formControlName="name" matInput>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Description:</mat-label>
          <textarea formControlName="description" matInput></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Start Date:</mat-label>
          <input formControlName="startDate" matInput [matDatepicker]="startDatePicker">
          <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
          <mat-datepicker #startDatePicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>End Date:</mat-label>
          <input formControlName="endDate" matInput [matDatepicker]="endDatePicker">
          <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
          <mat-datepicker #endDatePicker></mat-datepicker>
        </mat-form-field>
    </div>
    <div mat-dialog-actions class="action-bar">
      <button mat-button color="warn" mat-dialog-close>Cancel</button>
      <button mat-button color="primary" [mat-dialog-close]="true" [disabled]="!this.goalsService.form.valid" (click)="addGoal()">Create Goal</button>
    </div>
  `,
  styleUrls: ['./new-goal-dialog.component.scss']
})
export class NewGoalDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: NewGoalDialogData, public goalsService: GoalsService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  addGoal() {
    const rawData = this.goalsService.form.value;
    const data = {
      ...rawData,
      startDate: new Date(rawData.startDate).toISOString(),
      endDate: new Date(rawData.endDate).toISOString(),
      user: {
        name: this.dialogData.userName,
        uid: this.dialogData.userId
      }
    };
    this.goalsService.addGoal(this.dialogData.groupId, data);
  }

}
