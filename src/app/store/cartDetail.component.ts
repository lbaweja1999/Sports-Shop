import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
 templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {public connected: boolean = true;
    constructor(public cart: Cart) {}
   }