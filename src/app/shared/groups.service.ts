import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private firestore: AngularFirestore) {}

  getAllGroupsFor(uid) { 
    return this.firestore.collection('groups', ref => ref.where('users', 'array-contains', uid))
            .snapshotChanges();
  }
}
