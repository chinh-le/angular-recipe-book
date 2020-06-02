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
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.googleFirebaseApiKey
    });

    this.authService.autoAuth();
  }
/* 
  onClick() {
    console.log(this.authService.getToken());
  } */
}
