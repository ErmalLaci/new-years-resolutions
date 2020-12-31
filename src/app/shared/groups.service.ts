import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { GoogleUser } from '../models/google-user';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  form = new FormGroup({        
    name: new FormControl('', Validators.required)
  });
  
  constructor(private fs: AngularFirestore) {}

  getAllGroupsFor(uid) { 
    return this.fs.collection('groups', ref => ref.where('users', 'array-contains', uid))
            .snapshotChanges();
  }
  
  addToGroup(user: GoogleUser, groupId: string): Promise<void> {
    const groupsRef = this.fs.collection('groups').doc(groupId);
    return groupsRef.update({
      users: firebase.default.firestore.FieldValue.arrayUnion(user.uid)
    });
  }

  deleteGroup(groupId) {
    const groupsRef = this.fs.collection('groups').doc(groupId);
    return groupsRef.delete();
  }

  createGroup(user: GoogleUser, groupName: string): Promise<void> {
    const groupsRef = this.fs.collection('groups');
    return groupsRef.doc().set({
      name: groupName,
      goals: [],
      users: [user.uid]
    })
  }
}
