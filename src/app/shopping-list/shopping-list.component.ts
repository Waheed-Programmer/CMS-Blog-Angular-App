import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.Model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  
})
export class ShoppingListComponent implements OnInit {

  ingredient :Ingredient[] = [
    new Ingredient("Apple",5),
    new Ingredient("Mango",4)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
