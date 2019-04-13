import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class AuthService {
    private idToken: string = null;

    constructor(private router: Router, private dataStorageService: DataStorageService) {}

    setToken(token: string) {
        this.idToken = token;
    }
    getToken() {
        return this.idToken;
    }
    // TODO: setting up the token needs to happen firstmost, before proceeding further in the app, specifically when accesing a route directly (eg: /recipes)
    autoAuth() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                // console.log(user);
                if (user) {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token) => {
                                console.log('autoAuth()');
                                this.idToken = token;
                                this.dataStorageService.setToken(token);
                                // this.dataStorageService.getRecipes();
                            }
                        )
                } else {
                    this.idToken = null;
                    console.warn('Not Logged!');
                }
            }
        );
    }
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    // redirect to recipes page once logged
                    this.router.navigate(['/']);

                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.idToken = token //save token, once signed in, for later use
                        );
                }
            )
            .catch(
                error => console.log(error)
            )
    }
    isAuthenticated() {
        return this.idToken != null;
    }
    signOut() {
        firebase.auth().signOut();
        this.idToken = null;
        this.router.navigate(['/signin']);
    }
}