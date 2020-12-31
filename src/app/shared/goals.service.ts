import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as firebase from 'firebase/app';
import { GroupGoal } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  form = new FormGroup({        
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    startDate: new FormControl('', Validators.required), 
    endDate: new FormControl('', Validators.required)
  });

  constructor(private fs: AngularFirestore) {}

  addGoal(groupId: string, data) {
    const goalsRef = this.fs.collection('groups').doc(groupId);
    return goalsRef.update({
      goals: firebase.default.firestore.FieldValue.arrayUnion(data)
    });
  }

  removeGoal(groupId: string, data) {
    const goalsRef = this.fs.collection('groups').doc(groupId);
    return goalsRef.update({
      goals: firebase.default.firestore.FieldValue.arrayRemove(data)
    });
  }

  increaseProgression(groupId: string, goalIndex: number, goals: GroupGoal[]) {
    this.changeProgression(groupId, goalIndex, goals, 10);
  }

  decreaseProgression(groupId: string, goalIndex: number, goals: GroupGoal[]) {
    this.changeProgression(groupId, goalIndex, goals, -10);
  }

  changeProgression(groupId: string, goalIndex: number, goals: GroupGoal[], progressionChange: number) {
    const goalsRef = this.fs.collection('groups').doc(groupId);

    const newGoals = goals.map((goal, index) => {
      if (!goal.currentProgression) {
        goal.currentProgression = 0;
      }
      if (index === goalIndex) {
        goal.currentProgression += progressionChange;
      }
      return goal;
    });
    console.log(newGoals);
    return goalsRef.update({
      goals: newGoals
    });
  }

}
