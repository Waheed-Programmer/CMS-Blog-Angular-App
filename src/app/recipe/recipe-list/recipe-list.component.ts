import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.Model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Simply Data',
      'https://www.acouplecooks.com/wp-content/uploads/2020/06/Caesar-Salad-022-735x919.jpg'
    ),
    new Recipe(
      'A Demo recipe',
      'Simply Data',
      'https://thumbs.dreamstime.com/z/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}
