import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsService } from 'src/app/shared/groups.service';

@Component({
  selector: 'app-new-group-dialog',
  template: `
    <h1 mat-dialog-title>Create new group</h1>
    <div mat-dialog-content class="form-container" [formGroup]="this.groupsService.form">
        <mat-form-field appearance="fill">
          <mat-label>Name of group</mat-label>
          <input formControlName="name" matInput>
        </mat-form-field>
    </div>
    <div mat-dialog-actions class="action-bar">
      <button mat-button color="warn" mat-dialog-close>Cancel</button>
      <button mat-button color="primary" [mat-dialog-close]="true" [disabled]="!this.groupsService.form.valid" (click)="createGroup()">Create</button>
    </div>
  `,
  styleUrls: ['./new-group-dialog.component.scss']
})
export class NewGroupDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, public groupsService: GroupsService) { }

  ngOnInit(): void {
  }

  createGroup() {
    const rawData = this.groupsService.form.value;

    this.groupsService.createGroup(this.dialogData.user, rawData.name)
  } 

}
