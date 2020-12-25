export interface Group {
  name: string;
  users: GroupUser[];
  goals?: GroupGoal[];
}

export interface GroupUser {
  uid: string;
  name: string;
}

export interface GroupGoal {
  name: string;
  description: string;
  currentProgression: string;
  startDate: Date;
  endDate: Date;
  user: GroupUser;
}