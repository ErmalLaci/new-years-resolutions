import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as firebase from 'firebase/app';
import { GoogleUser } from '../models/google-user';
import { Invite } from '../models/invite';
import { GroupsService } from './groups.service';

@Injectable({
  providedIn: 'root'
})
export class InvitationsService {

  form = new FormGroup({
    email: new FormControl('', Validators.required)
  });

  constructor(private fs: AngularFirestore, private groupsService: GroupsService) { }

  createInvitation(recipient: string, data) {
    const invitationsRef = this.fs.collection('invitations').doc(recipient);

    this.doesInviteDocExist(invitationsRef).then(
      docExists => {
        if (docExists) {
          invitationsRef.update({
            invites: firebase.default.firestore.FieldValue.arrayUnion(data)
          });
        } else {
          invitationsRef.set({
            invites: [data]
          })
        }
      }
    ).then(() => {

      //this.sendEmail();
    });
  }

  sendEmail() {
    const DOMAIN = 'https://api.mailgun.net/v3/sandbox0cd92938c8af4972b71ab132432cb55a.mailgun.org';
    const apiKey = 'e1d7ce21468faeae70211591aa279742-c50a0e68-995b872b';

  }

  doesInviteDocExist(invitationsRef): Promise<boolean> {
    return invitationsRef.get().toPromise().then(documentSnapshot => documentSnapshot.exists);
  }

  getInvitations(recipient: GoogleUser) {
    return this.fs.collection('invitations').doc(recipient.email).snapshotChanges();
  }

  removeInvitations(recipient: GoogleUser, invitationsToRemove: Invite[]) {
    const invitationsRef = this.fs.collection('invitations').doc(recipient.email);
    return invitationsRef.update({
      invites: firebase.default.firestore.FieldValue.arrayRemove(...invitationsToRemove)
    });
  }

  acceptInvitation(recipient: GoogleUser, invite: Invite, invitationsToRemove: Invite[]) {
    this.groupsService.addToGroup(recipient, invite.groupId).then(() => {
      this.removeInvitations(recipient, invitationsToRemove);
    });
  }

}
