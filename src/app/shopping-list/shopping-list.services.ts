import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {


  ingredientChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pepper', 1),
    new Ingredient('Salt', 2)
  ];

  getIngredients() {

    return this.ingredients.slice();
  }


  IngredientAdded(ingredient: Ingredient) {

    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())

  }
  addIngredients(ingredients: Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
