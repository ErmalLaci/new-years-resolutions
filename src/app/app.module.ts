import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

// Material Design
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

// My Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GroupListItemComponent } from './components/group-list-item/group-list-item.component';
import { GoalsListComponent } from './components/goals-list/goals-list.component';
import { GoalsListItemComponent } from './components/goals-list-item/goals-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    GroupListItemComponent,
    GoalsListComponent,
    GoalsListItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
