import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserService } from 'src/app/shared/current-user.service';
import { NewGroupDialogComponent } from '../new-group-dialog/new-group-dialog.component';

@Component({
  selector: 'app-create-group-button',
  template: `
    <div class="create-btn-container">
      <button mat-button color="primary" (click)="openNewGroupDialog()">Create Group</button>
    </div>
  `,
  styleUrls: ['./create-group-button.component.scss']
})
export class CreateGroupButtonComponent implements OnInit {

  constructor(public dialog: MatDialog, private currentUser: CurrentUserService) {}

  ngOnInit(): void {
  }

  openNewGroupDialog() {
    this.dialog.open(NewGroupDialogComponent, {
      data: {
        user: this.currentUser.getCurrentUser()
      }
    });
  }
}
