import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter(); OR
    // ingredientsChanged = new EventEmitter<Ingredient[]>();// OR
    // BETTER PRACTICE
    ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('a', 5),
        new Ingredient('b', 10)
    ];

    getIngredients() {
        // using slice() to get a copy of ingredients to protect the data (best practice) 
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    // adding an ingredient will not reflect in the ShoppingListComponent bc of the use of slice()
    // Solutions:
    // 1. remove slice() to allow direct access to the data (not recommended)
    // 2. Emit event (EventEmitter) on Data changed, and subscribe to event in ShoppingListComponent
    add(ingredient: Ingredient) {
        // console.log('add: ', ingredient);
        if (ingredient.name !== '' && ingredient.amount !== null) {
            this.ingredients.push(ingredient);
            // with Subject()
            this.ingredientsChanged.next(this.ingredients.slice());
            // with EventEmitter
            // this.ingredientsChanged.emit(this.ingredients.slice());
        }
    }

    // using spread operator (...)
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // with Subject()
        this.ingredientsChanged.next(this.ingredients.slice());
        // with EventEmitter()
        // this.ingredientsChanged.emit(this.ingredients.slice());
    }

    delete(index: number) {
        console.log(index);
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());

        // console.log(name);
        /* let deleted: boolean = false;

        for (let i in this.ingredients) {
            // console.log(this.ingredients[i].name);
            if (this.ingredients[i].name === name) {
                this.ingredients.splice(+i, 1);
                // with Subject()
                this.ingredientsChanged.next(this.ingredients.slice());
                // with EventEmitter()
                // this.ingredientsChanged.emit(this.ingredients.slice());
                deleted = true;
            }
        }

        if (!deleted) {
            console.log('Not Found!!!');
        } */
    }

    update(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}