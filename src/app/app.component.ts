import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private title = 'prj-the-basics';

  constructor(private authService: AuthService) {
    // console.log('app constructor called!');
  }

  ngOnInit() {
    // config can be found at: https://console.firebase.google.com/project/ng7-recipe-book-d5358/authentication/users - Web setup
    firebase.initializeApp({
      apiKey: "AIzaSyB64AyozKg7IsuhKaaZ1rjMqtupQIoRTSE",
      authDomain: "ng7-recipe-book-d5358.firebaseapp.com"
    });

    this.authService.autoAuth();
  }

  onClick() {
    console.log(this.authService.getToken());
  }
}
