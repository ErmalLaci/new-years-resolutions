import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvitationsService } from 'src/app/shared/invitations.service';

@Component({
  selector: 'app-new-invite-dialog',
  template: `
    <h1 mat-dialog-title>Invite a user to group: {{ dialogData.groupName }}</h1>
    <div mat-dialog-content class="form-container" [formGroup]="this.invitationsService.form">
        <mat-form-field appearance="fill">
          <mat-label>Email to invite:</mat-label>
          <input formControlName="email" matInput>
        </mat-form-field>
    </div>
    <div mat-dialog-actions class="action-bar">
      <button mat-button color="warn" mat-dialog-close>Cancel</button>
      <button mat-button color="primary" [mat-dialog-close]="true" [disabled]="!this.invitationsService.form.valid" (click)="addInvitation()">Invite</button>
    </div>
  `,
  styleUrls: ['./new-invite-dialog.component.scss']
})
export class NewInviteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, public invitationsService: InvitationsService) { }

  addInvitation() {
    const rawData = this.invitationsService.form.value;

    this.invitationsService.createInvitation(rawData.email, {
      groupId: this.dialogData.groupId,
      groupName: this.dialogData.groupName,
      invitedBy: this.dialogData.invitedBy
    });
  }
}
