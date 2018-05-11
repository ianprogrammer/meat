import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';
import { MenuItem } from './menu-item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem
  @Output() add= new EventEmitter()

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }
}
