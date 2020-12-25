import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GroupsService } from 'src/app/shared/groups.service';
import { GoogleUser } from '../../models/google-user'; 

@Component({
  selector: 'app-overview',
  template: `
    <div>
      <h1>Hello {{ user.displayName }}!</h1>
      <div *ngFor="let group of groups">
        <app-group-list-item [group]="group.payload.doc.data()"></app-group-list-item>
      </div>
      <button mat-button color="primary" (click)="logout()">Logout</button>
      <button mat-button color="primary" (click)="check()">check</button>

    </div>
  `,
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Output() emitLogoutEvent = new EventEmitter<any>();
  @Input() user: GoogleUser;

  groups: any;

  constructor(private groupsService: GroupsService){}

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() {
    this.groupsService
      .getAllGroupsFor(this.user.uid)
      .subscribe(res =>(this.groups = res));
  }

  logout() {
    this.emitLogoutEvent.emit();
  }

  check() {
    console.log(this.groups);
  }

}
