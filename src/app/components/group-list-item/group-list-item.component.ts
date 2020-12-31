import { Component, Input, OnInit } from "@angular/core";
import { Group } from "src/app/models/group";
import { MatDialog } from '@angular/material/dialog';
import { NewGoalDialogComponent } from '../new-goal-dialog/new-goal-dialog.component';
import { CurrentUserService } from "src/app/shared/current-user.service";
import { NewInviteDialogComponent } from "../new-invite-dialog/new-invite-dialog.component";
import { GroupsService } from "src/app/shared/groups.service";

@Component({
    selector: "app-group-list-item",
    template: `
        <mat-card class="group-container">
            <mat-card-title class="group-header">
                <span class="group-name">{{ group.name }}</span>
                <button
                    mat-button
                    color="primary"
                    (click)="openNewGoalDialog()"
                >
                    Add New Goal
                </button>
                <button
                    mat-button
                    color="primary"
                    (click)="openNewInviteDialog()"
                >
                    Invite to group
                </button>
                <button mat-button color="warn" (click)="deleteGroup()">
                    Delete group
                </button>
            </mat-card-title>
            <mat-card-content>
                <div>
                    <div>View goals for {{ group.name }}</div>
                </div>
                <app-goals-list-item
                    *ngFor="let goal of group.goals; let i = index"
                    [goal]="goal"
                    [groupId]="group.id"
                    [index]="i"
                    [goals]="group.goals"
                ></app-goals-list-item>
          </mat-card-content>
        </mat-card>
    `,
    styleUrls: ["./group-list-item.component.scss"],
})
export class GroupListItemComponent implements OnInit {
    @Input() group: Group;

    constructor(
        public dialog: MatDialog,
        private currentUser: CurrentUserService,
        private groupsService: GroupsService
    ) {}

    ngOnInit(): void {}

    deleteGroup() {
        this.groupsService.deleteGroup(this.group.id);
    }

    openNewGoalDialog() {
        this.dialog.open(NewGoalDialogComponent, {
            data: {
                groupName: this.group.name,
                groupId: this.group.id,
                userName: this.currentUser.getCurrentUser().displayName,
                userId: this.currentUser.getCurrentUser().uid,
            },
        });
    }

    openNewInviteDialog() {
        this.dialog.open(NewInviteDialogComponent, {
            data: {
                groupId: this.group.id,
                groupName: this.group.name,
                invitedBy: this.currentUser.getCurrentUser().email,
            },
        });
    }
}
