export interface Group {
  id: string;
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
  currentProgression: number;
  startDate: Date;
  endDate: Date;
  user: GroupUser;
}