import { Injectable } from '@angular/core';
import { GoogleUser } from '../models/google-user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private _currentUser: GoogleUser = null;

  constructor() { }

  setCurrentUser(user: GoogleUser) {
    this._currentUser = {
      displayName: user.displayName,
      uid: user.uid,
      email: user.email
    };
  }

  getCurrentUser(): GoogleUser {
    return this._currentUser;
  }

  clearCurrentUser() {
    this._currentUser = null;
  }
}
