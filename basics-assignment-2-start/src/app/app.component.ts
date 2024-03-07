import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowNewUsername = false;
  usernameCreation = "No username created!";

  constructor() {

  }

  onCreatUsername() {
    if (this.username === ''){
      this.allowNewUsername = true;
    }
    this.usernameCreation = 'Server was created! Name is ' + this.username;
  }
}
