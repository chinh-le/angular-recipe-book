import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') name: ElementRef;
  // @ViewChild('amountInput') amount: ElementRef;
  private startEditingSubscription: Subscription;
  editMode: boolean = false;
  private editedItemNumber: number;
  private editedIem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.startEditingSubscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        // console.log(index);
        this.editedItemNumber = index;
        this.editMode = true;
        this.editedIem = this.slService.getIngredient(index);
        this.slForm.setValue({
          'name': this.editedIem.name,
          'amount': this.editedIem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.startEditingSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    // console.log(this.editMode);
    const name: string = form.value.name;
    const amount: number = form.value.amount;
    if (this.editMode) {
      this.slService.update(this.editedItemNumber, new Ingredient(name, amount));
    } else {
      this.slService.add(new Ingredient(name, amount));
      // this.slService.add(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    }

    this.clearForm();
  }

  onDelete() {
    this.slService.delete(this.editedItemNumber);
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.slForm.reset();
  }
}
