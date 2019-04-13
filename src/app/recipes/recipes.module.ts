import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';//contains directives: ngClass, ngModel, ngStyle, ngIf, ngFor,... and should be used in all Modules other than AppModule
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
// import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipesRouting } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        // DropdownDirective
    ],
    imports: [
        // CommonModule,
        ReactiveFormsModule, //moved from AppModule since it's only used in RecipeEdit
        RecipesRouting,
        SharedModule
    ]
})
export class RecipesModule {}