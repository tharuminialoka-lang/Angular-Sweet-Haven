import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sweet } from '../models/sweet';

export interface CartItem {
  sweet: Sweet;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();
  
  private cartCountSubject = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  addToCart(sweet: Sweet): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItemIndex = currentItems.findIndex(item => item.sweet.id === sweet.id);
    
    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      currentItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      currentItems.push({ sweet, quantity: 1 });
    }
    
    this.cartItemsSubject.next(currentItems);
    this.updateCartCount();
  }

  removeFromCart(sweetId: number): void {
    const currentItems = this.cartItemsSubject.value.filter(item => item.sweet.id !== sweetId);
    this.cartItemsSubject.next(currentItems);
    this.updateCartCount();
  }

  updateQuantity(sweetId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(sweetId);
      return;
    }
    
    const currentItems = this.cartItemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.sweet.id === sweetId);
    
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItemsSubject.next(currentItems);
      this.updateCartCount();
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  getCartCount(): number {
    return this.cartCountSubject.value;
  }

  getSubtotal(): number {
    return this.cartItemsSubject.value.reduce((total, item) => {
      return total + (item.sweet.price * item.quantity);
    }, 0);
  }

  getShipping(): number {
    return 10.00; // Fixed shipping cost
  }

  getTotal(): number {
    return this.getSubtotal() + this.getShipping();
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.updateCartCount();
  }

  private updateCartCount(): void {
    const count = this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
    this.cartCountSubject.next(count);
  }
}