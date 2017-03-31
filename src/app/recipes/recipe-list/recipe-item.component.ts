import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  inputs: ['recipe']                         // The input array means it is set outside of this component
})
export class RecipeItemComponent implements OnInit {
    recipeId: number;
    constructor() { }
    ngOnInit() {
  }
}
