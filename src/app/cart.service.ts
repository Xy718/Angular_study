import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];
  constructor(
    private http: HttpClient
  ) { }

  //添加到购物车
  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
