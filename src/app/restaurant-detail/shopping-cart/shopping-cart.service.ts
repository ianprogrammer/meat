import {MEAT_API} from "../../app.api"
import {Injectable} from "@angular/core"
import {Http} from "@angular/http"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../../app.error-handler";
import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";


export class ShoppingCartService{
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
     let foundItem = this.items.find((mItem)=>mItem.menuItem.id === item.id)
    if(foundItem){
        this.increaseQty(foundItem)
    }else{
        this.items.push(new CartItem(item))
    }

    }

    decreaseQty(item:CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity===0){
            this.remove(item)
        }
    }
    increaseQty(item:CartItem){
        item.quantity = item.quantity + 1
    }

    remove(item:CartItem){
        this.items.splice(this.items.indexOf(item),1)
    }

    total():number{
        return this.items.map(item => item.value()).reduce((prev,value) => prev+value , 0)
    }
}