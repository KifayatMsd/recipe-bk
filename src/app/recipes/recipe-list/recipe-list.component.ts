import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './recipe-list.component.html',
	outputs : ['recipeSelected']
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
	recipeSelected = new EventEmitter<Recipe>();
    recipe_from_list = new Recipe('Dumy', 'Dumy', 'http://thumbs1.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg');

    constructor() { }
    ngOnInit() { }

    onSelected(recipe: Recipe) {
		this.recipeSelected.emit(recipe);
    }
}
 