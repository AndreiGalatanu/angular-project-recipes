import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.services";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()


  private recipes: Recipe[] = [
    new Recipe(
      'Omelette',
      'Tasty taste omelette',
      'https://cdn.pixabay.com/photo/2015/05/20/16/11/kitchen-775746_960_720.jpg'
      , [
        new Ingredient('Eggs', 4),
        new Ingredient('Pepper', 1)
      ])
    , new Recipe(
      'Big Burger',
      'Just a burger',
      'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg',
      [new Ingredient('Bread', 2),
      new Ingredient('Meat', 1)])

  ];

  constructor(private slService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    this.slService.addIngredients(ingredients)
  }

}
