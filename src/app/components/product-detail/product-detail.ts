import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sweet } from '../../models/sweet'; // Import Sweet instead of Product

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent {
  @Input() product: Sweet | null = null; // Change to Sweet
  @Output() close = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<Sweet>(); // Change to Sweet

  selectedQuantity: number = 1;

  closeDetail(): void {
    this.close.emit();
  }

  addToCartHandler(): void {
    if (this.product) {
      this.addToCart.emit(this.product);
    }
  }

  incrementQuantity(): void {
    this.selectedQuantity++;
  }

  decrementQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  onModalClick(event: Event): void {
    event.stopPropagation();
  }
}