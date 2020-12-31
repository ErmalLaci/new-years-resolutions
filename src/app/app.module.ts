import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Material Design
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// My Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GroupListItemComponent } from './components/group-list-item/group-list-item.component';
import { GoalsListItemComponent } from './components/goals-list-item/goals-list-item.component';
import { NewGoalDialogComponent } from './components/new-goal-dialog/new-goal-dialog.component';
import { InvitationsListComponent } from './components/invitations-list/invitations-list.component';
import { InvitationsListItemComponent } from './components/invitations-list-item/invitations-list-item.component';
import { NewInviteDialogComponent } from './components/new-invite-dialog/new-invite-dialog.component';
import { NewGroupDialogComponent } from './components/new-group-dialog/new-group-dialog.component';
import { CreateGroupButtonComponent } from './components/create-group-button/create-group-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    GroupListItemComponent,
    GoalsListItemComponent,
    NewGoalDialogComponent,
    InvitationsListComponent,
    InvitationsListItemComponent,
    NewInviteDialogComponent,
    NewGroupDialogComponent,
    CreateGroupButtonComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
