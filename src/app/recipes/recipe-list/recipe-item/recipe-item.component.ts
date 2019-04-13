import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  // @Input() item: Recipe;
  @Input() index: number;
  item: Recipe;

  constructor(private recipesService: RecipeService) {}

  ngOnInit() {
    this.item = this.recipesService.getRecipe(+this.index);
  }

  onSelected() {
    // with EventEmitter()
    // this.recipesService.recipeSelectEvt.emit(this.item);
  }
}
