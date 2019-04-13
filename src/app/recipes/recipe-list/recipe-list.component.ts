import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private recipeschangedSubscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.recipeschangedSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    // TODO: response to get the auth token (AuthService.autoAuth()) arrives after than RecipeListComponent's init, when accessing recipes route directly, hence using the local recipes instead. This requires a thinkover of how to get auth token before loading recipes route
    if (this.dataStorageService.getLocalToken()) {
      this.dataStorageService.getRecipes()
        .subscribe(
          (data) => {
            console.log('DB recipes!');
            this.recipeService.setRecipes(data);
          }
        );
    } else {
      console.log('Local recipes');
      this.recipes = this.recipeService.getRecipes();
    }


    /* if (this.dataStorageService.getLocalToken()) {
      this.dataStorageService.getRecipes()
        .subscribe(
          (response) => {
            console.warn('DB recipes!');
            this.recipes = response;
          }
        );
    } else {
      console.warn('Local recipes!');
      this.recipes = this.recipeService.getRecipes();
    } */

    // this.recipes = this.dataStorageService.getRecipes();
    /* this.dataStorageService.getRecipes()
      .subscribe(
        (response) => {
          console.log(response);
          // this.recipes = recipes;
        }
      ); */
      
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.recipeschangedSubscription.unsubscribe();
  }
}
