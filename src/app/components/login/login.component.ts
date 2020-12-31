import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-text">CHOOSE YOUR NEW YEARS RESOLUTIONS!</div>
      <button mat-button color="primary" (click)="login()">Login with Google</button>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Output() emitLoginEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.emitLoginEvent.emit();
  }

}
