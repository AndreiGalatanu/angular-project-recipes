import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService {

  startedEditing = new Subject<number>();
  ingredientChanged = new Subject<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pepper', 1),
    new Ingredient('Salt', 2)
  ];

  getIngredients() {

    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  IngredientAdded(ingredient: Ingredient) {

    this.ingredients.push(ingredient)
    this.ingredientChanged.next(this.ingredients.slice())

  }
  addIngredients(ingredients: Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
