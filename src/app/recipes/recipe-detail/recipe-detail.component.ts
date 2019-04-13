import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // @Input() recipe: Recipe;
  // private recipes: Recipe[];
  recipe: Recipe;
  private id: number;
  private paramsSubscription: Subscription;
  private recipeschangedSubscription: Subscription;

  constructor(private slService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // console.log(this.route);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        // console.log(params);
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
        // console.log(this.recipe);
      }
    );

    this.recipeschangedSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipe = recipes[this.id];
      }
    );
  }


  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['../'], {relativeTo: this.route});//OR
    this.router.navigate(['/recipes']);
  }

  addToShoppingList() {
    // use of ShoppingListService
    /* for (let i of this.recipe.ingredients) {
      this.slService.add(i);
    } */

    // use of RecipeService
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.recipeschangedSubscription.unsubscribe();
  }
}
