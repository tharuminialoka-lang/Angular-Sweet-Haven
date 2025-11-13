import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart';
import { SweetService } from '../../services/sweet';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; // Initialize as empty array
  isCartOpen = false;

  constructor(
    private cartService: CartService,
    private sweetService: SweetService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items || []; // Ensure it's never undefined
    });
  }

  // Add a computed property for cart count
  get cartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Rest of your methods remain the same...
  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.sweet.id, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.sweet.id, item.quantity - 1);
  }

  removeItem(sweetId: number): void {
    this.cartService.removeFromCart(sweetId);
  }

  getSubtotal(): number {
    return this.cartService.getSubtotal();
  }

  getShipping(): number {
    return this.cartService.getShipping();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  getCategoryName(categoryType: string): string {
    const categories = this.sweetService.getCategories();
    const category = categories.find(cat => cat.type === categoryType);
    return category ? category.name : categoryType;
  }

  proceedToCheckout(): void {
    alert('Proceeding to checkout! This would integrate with a payment system.');
    this.closeCart();
  }

  continueShopping(): void {
    this.closeCart();
  }
}