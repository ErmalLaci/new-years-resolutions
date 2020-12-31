import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Invite } from "src/app/models/invite";
import { InvitationsService } from "src/app/shared/invitations.service";

@Component({
  selector: "app-invitations-list-item",
  template: `
        <div class="invite-container">
            <div class="invite-info">
                Invited to: {{ invite.groupName }}
                <br />
                By: {{ invite.invitedBy }}
            </div>
            <div class="invite-actions">
                <button mat-button color="primary" (click)="acceptInvite()">Accept</button>
                <button mat-button color="warn" (click)="declineInvite()">Decline</button>
            </div>
        </div>
    `,
  styleUrls: ["./invitations-list-item.component.scss"],
})
export class InvitationsListItemComponent implements OnInit {
  @Input() invite: Invite;
  @Output() declineInviteEvent = new EventEmitter<Invite>();
  @Output() acceptInviteEvent = new EventEmitter<Invite>();

  constructor(invitationsService: InvitationsService) { }

  ngOnInit(): void { }

  declineInvite() {
    this.declineInviteEvent.emit(this.invite);
  }

  acceptInvite() {
    this.acceptInviteEvent.emit(this.invite);
  }
}
