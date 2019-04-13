import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import * as firebase from 'firebase';
// import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    private urlDB: string = 'https://ng7-recipe-book-d5358.firebaseio.com/recipe.json'; //Firebase
    private token: string = null;

    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        // const token = this.authService.getToken();
        const body = this.recipeService.getRecipes();
        // if (this.token) {
            return this.http.put(this.urlDB + '?auth=' + this.token, body);

        // } else {
            // return Observable.throw('No Token!');
        // }
    }

    getRecipes() {
        // if (this.token) {
            return this.http.get(this.urlDB + '?auth=' + this.token)
                .map(
                    (response: Response) => {
                        // console.log(response);
                        const recipes: Recipe[] = response.json();
                        for (let recipe of recipes) {
                            if (!recipe['ingredients']) {
                                recipe['ingredients'] = [];//adding empty ingredients array could prevent errors in the app where ingredients were removed (deleted) and saved to the DB
                            }
                        }
                        return recipes;
                    })
                .catch(
                    (err: Response) => {
                        // console.log('error: ', err);
                        return Observable.throw(err.json());
                    });/* 
                .subscribe(
                    (recipes: Recipe[]) => {
                        // console.log('recipes: ', recipes);
                        this.recipeService.setRecipes(recipes);
                    }
                ); */
        // } else {
            // return Observable.throw('No Token!');
            // return Observable.throw(this.recipeService.getRecipes());
        // }
        
    }
    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token) => {
                    return token;
                }
            )
    }
    setToken(token: string) {
        this.token = token;
    }
    getLocalToken() {
        return this.token;
    }
}