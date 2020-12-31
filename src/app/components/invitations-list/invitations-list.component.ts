import { Component, OnInit } from '@angular/core';
import { Invite } from 'src/app/models/invite';
import { CurrentUserService } from 'src/app/shared/current-user.service';
import { InvitationsService } from 'src/app/shared/invitations.service';

@Component({
  selector: 'app-invitations-list',
  template: `
    <div  *ngIf="invitations && invitations.length > 0">
      Invitation list
      <app-invitations-list-item *ngFor="let invite of invitations" [invite]="invite" (declineInviteEvent)="declineInvite($event)" (acceptInviteEvent)="acceptInvite($event)"></app-invitations-list-item>
    </div>
  `,
  styleUrls: ['./invitations-list.component.scss']
})
export class InvitationsListComponent implements OnInit {

  invitations: Invite[];

  constructor(public invitationsService: InvitationsService, private currentUser: CurrentUserService) { }

  ngOnInit(): void {
    this.getInvitations();
  }

  getInvitations() {
    this.invitationsService
      .getInvitations(this.currentUser.getCurrentUser())
      .subscribe(res => this.invitations = res.payload.data()['invites']);
  }

  declineInvite(invite: Invite) {
    const invitationsToRemove = this.invitations.filter(invitation => invitation.groupId === invite.groupId);
    this.invitationsService.removeInvitations(this.currentUser.getCurrentUser(), invitationsToRemove);
  }

  acceptInvite(invite: Invite) {
    const invitationsToRemove = this.invitations.filter(invitation => invitation.groupId === invite.groupId);
    this.invitationsService.acceptInvitation(this.currentUser.getCurrentUser(), invite, invitationsToRemove);
  }

}
