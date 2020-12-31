import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Group } from 'src/app/models/group';
import { CurrentUserService } from 'src/app/shared/current-user.service';
import { GroupsService } from 'src/app/shared/groups.service';
import { GoogleUser } from '../../models/google-user'; 

@Component({
  selector: 'app-overview',
  template: `
    <div class="overview-container">
      <div class="overview-header">
        <h1>Hello {{ user.displayName }}!</h1>
        <button mat-button color="primary" (click)="logout()">Logout</button>
        <app-create-group-button></app-create-group-button>
      </div>
      <div>
        <app-invitations-list></app-invitations-list>
      </div>
      <div *ngFor="let group of groups">
        <app-group-list-item [group]="getCleanGroup(group)"></app-group-list-item>
      </div>
    </div>
  `,
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Output() emitLogoutEvent = new EventEmitter<any>();
  @Input() user: GoogleUser;

  groups: any;

  constructor(private groupsService: GroupsService, private currentUser: CurrentUserService){}

  ngOnInit(): void {
    this.getGroups();
    this.currentUser.setCurrentUser(this.user);
  }

  getCleanGroup(uncleanedGroup: any): Group {
    return {
      ...uncleanedGroup.payload.doc.data(),
      id: uncleanedGroup.payload.doc.id
    }
  }

  getGroups() {
    this.groupsService
      .getAllGroupsFor(this.user.uid)
      .subscribe(res =>(this.groups = res));
  }

  logout() {
    this.currentUser.clearCurrentUser();
    this.emitLogoutEvent.emit();
  }

  check() {
    console.log(this.groups.map(val => this.getCleanGroup(val)));
  }

}
