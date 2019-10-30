import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';

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
    // https://console.firebase.google.com/project/ng7-recipe-book-d5358/settings/general/ - Project Settings Page
    firebase.initializeApp({
      apiKey: environment.firebaseAPIKey,
      authDomain: "ng7-recipe-book-d5358.firebaseapp.com"
    });

    this.authService.autoAuth();
  }

  onClick() {
    console.log(this.authService.getToken());
  }
}
