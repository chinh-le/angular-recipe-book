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
  private title = 'recipe-book-ng';

  constructor(private authService: AuthService) {
    // console.log('app constructor called!');
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.googleFirebaseApiKey
      // authDomain: "recipe-book-ng-183d5.firebaseapp.com"
    });

    this.authService.autoAuth();
  }
/* 
  onClick() {
    console.log(this.authService.getToken());
  } */
}
