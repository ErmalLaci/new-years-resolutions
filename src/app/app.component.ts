import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.user | async as user; else showLogin">
      <app-overview [user]="user" (emitLogoutEvent)="logout()"></app-overview>
    </div>
    <ng-template #showLogin>
      <app-login (emitLoginEvent)="login()"></app-login>
    </ng-template>
  `,
})
export class AppComponent {

  constructor(public auth: AngularFireAuth) {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      console.log('LOGGED IN');
    });
  }

  logout() {
    this.auth.signOut();
  }

}