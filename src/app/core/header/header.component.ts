import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService, private authService: AuthService) {}
    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => console.log(response),
            (err) => console.log(err.json())
        );
    }
    onFetchData() {
        this.dataStorageService.getRecipes();
    }
    onLogout() {
        this.authService.signOut();
    }
    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}