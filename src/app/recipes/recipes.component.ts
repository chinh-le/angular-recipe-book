import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
  // providers: [RecipeService] //needs to be provided in AppModule to share the same RecipeService instance in RecipesComponent and ShoppingListcomponent
})
export class RecipesComponent implements OnInit {
  // recipeSelected: Recipe;

  constructor(private authService: AuthService) { }
  // constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    // with EventEmitter()
    /* this.recipeService.recipeSelectEvt.subscribe(
      (recipe: Recipe) => this.recipeSelected = recipe
    ); */
    // same as:
    /* this.recipeService.recipeSelectEvt
      .subscribe(
        (recipe: Recipe) => {
          return this.recipeSelected = recipe;
        }
      ); */

  }
}
