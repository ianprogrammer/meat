import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
  }
  clear():void{
    this.shoppingCartService.clear()
  }
  removeItem(item:any):void{
    this.shoppingCartService.remove(item)

  }
  addMenuItem(item:any):void{
    this.shoppingCartService.addItem(item)
  }

  items():any[]{
    return this.shoppingCartService.items
  }
  total():number{
    return this.shoppingCartService.total()
  }

}
