import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sweet, Category } from '../../models/sweet';
import { SweetService } from '../../services/sweet';
import { CartService } from '../../services/cart';
import { ToastService } from '../../services/toast';
import { FavoritesService } from '../../services/favorites';

@Component({
  selector: 'app-featured-sweets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-sweets.html',
  styleUrls: ['./featured-sweets.css']
})
export class FeaturedSweetsComponent implements OnInit {
  sectionTitle = 'Featured Sweets';
  sectionSubtitle = 'An Inclusive Pricing Accountable Best at the best news source';
  featuredItems: Sweet[] = [];
  currentCategory: string = 'all';
  categories: Category[] = [];

  featuredSweets: Sweet[] = [];

  

  constructor(
    private sweetService: SweetService,
    private cartService: CartService,
    private toastService: ToastService,
    private favoritesService: FavoritesService,
  ) {}

 

 
  toggleFavorite(sweet: Sweet): void {
    if (sweet.isFavorite) {
      this.favoritesService.removeFromFavorites(sweet.id);
    } else {
      this.favoritesService.addToFavorites(sweet);
    }
    sweet.isFavorite = !sweet.isFavorite;
  }
  // Add these properties for product detail modal
  selectedProduct: Sweet | null = null;
  showProductDetail: boolean = false;

  ngOnInit(): void {
    this.categories = this.sweetService.getCategories();
    this.loadSweets(this.sweetService.getSelectedCategory());
    this.featuredSweets.forEach(sweet => {
      sweet.isFavorite = this.favoritesService.isFavorite(sweet.id);
    });
    
    // Subscribe to category changes
    this.sweetService.selectedCategory$.subscribe(
      category => {
        this.loadSweets(category);
      }
    );
  }

  loadSweets(category: string = 'all'): void {
    this.featuredItems = this.sweetService.getFeaturedSweets(category);
    this.currentCategory = category;
  }

  // Product detail methods
  viewProductDetails(sweet: Sweet): void {
    this.selectedProduct = sweet;
    this.showProductDetail = true;
  }

  closeProductDetail(): void {
    this.showProductDetail = false;
    this.selectedProduct = null;
  }

  addToCartFromDetail(sweet: Sweet): void {
    this.addToCart(sweet);
    this.closeProductDetail();
  }

  // Add to cart method
  addToCart(sweet: Sweet): void {
    this.cartService.addToCart(sweet);
    this.toastService.showSuccess(`${sweet.name} added to cart!`, 3000);
  }

  // Helper methods for product details
  getIngredients(sweet: Sweet): string[] {
    // Sample ingredients based on product category
    const ingredientMap: { [key: string]: string[] } = {
      'cakes': ['Wheat Flour', 'Sugar', 'Butter', 'Eggs', 'Milk', 'Baking Powder', 'Vanilla Extract'],
      'chocolates': ['Cocoa Beans', 'Sugar', 'Cocoa Butter', 'Milk Powder', 'Vanilla'],
      'cookies': ['Flour', 'Butter', 'Sugar', 'Eggs', 'Chocolate Chips', 'Baking Soda'],
      'cupcakes': ['Flour', 'Sugar', 'Butter', 'Eggs', 'Milk', 'Baking Powder', 'Frosting'],
      'default': ['Premium Flour', 'Fresh Butter', 'Organic Sugar', 'Farm Eggs', 'Natural Flavors']
    };

    return ingredientMap[sweet.category.toLowerCase()] || ingredientMap['default'];
  }

  getNutritionInfo(sweet: Sweet): any {
    // Sample nutrition information
    const nutritionMap: { [key: string]: any } = {
      'cakes': { calories: 320, protein: '4g', carbs: '45g', fat: '15g' },
      'chocolates': { calories: 280, protein: '3g', carbs: '35g', fat: '18g' },
      'cookies': { calories: 180, protein: '2g', carbs: '25g', fat: '8g' },
      'cupcakes': { calories: 250, protein: '3g', carbs: '35g', fat: '12g' },
      'default': { calories: 200, protein: '3g', carbs: '30g', fat: '10g' }
    };

    return nutritionMap[sweet.category.toLowerCase()] || nutritionMap['default'];
  }

  getReviews(sweet: Sweet): any[] {
    // Sample reviews
    const sampleReviews = [
      {
        userName: 'Sarah M.',
        rating: 5,
        comment: 'Absolutely delicious! The perfect balance of sweetness and flavor.',
        date: '2024-01-15'
      },
      {
        userName: 'John D.',
        rating: 4,
        comment: 'Very tasty and fresh. Will definitely order again!',
        date: '2024-01-10'
      },
      {
        userName: 'Emma L.',
        rating: 5,
        comment: 'Best sweet I have ever tasted! Highly recommended.',
        date: '2024-01-08'
      }
    ];

    return sampleReviews;
  }

  getCategoryDisplayName(): string {
    if (this.currentCategory === 'all') return 'All Sweets';
    const category = this.categories.find(cat => cat.type === this.currentCategory);
    return category ? category.name : this.currentCategory;
  }

  getFilteredSweetsCount(): number {
    return this.featuredItems.length;
  }

  getCategoryDescription(): string {
    if (this.currentCategory === 'all') return 'Discover all our delicious sweets and treats from every category';
    const category = this.categories.find(cat => cat.type === this.currentCategory);
    return category ? category.description : `Explore our ${this.currentCategory} collection`;
  }

  selectCategory(category: string): void {
    this.sweetService.setSelectedCategory(category);
  }
}