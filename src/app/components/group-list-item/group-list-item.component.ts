import { Component, Input, OnInit } from "@angular/core";
import { Group } from "src/app/models/group";

@Component({
  selector: "app-group-list-item",
  template: `
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ group.name }}
          </mat-panel-title>
        </mat-expansion-panel-header>
        <app-goals-list [goals]="group.goals"></app-goals-list>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styleUrls: ["./group-list-item.component.scss"],
})
export class GroupListItemComponent implements OnInit {
  @Input() group: Group;

  constructor() {}

  ngOnInit(): void {}
}
