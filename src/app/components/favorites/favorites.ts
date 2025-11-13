import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FavoritesService } from '../../services/favorites';
import { Sweet } from '../../models/sweet';
import { FavoritesService } from '../../services/favorites';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Sweet[] = [];
  isFavoritesVisible = false;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  toggleFavorites(): void {
    this.isFavoritesVisible = !this.isFavoritesVisible;
  }

  removeFromFavorites(sweet: Sweet): void {
    this.favoritesService.removeFromFavorites(sweet.id);
  }

  getTotalPrice(): number {
    return this.favorites.reduce((total, item) => total + item.price, 0);
  }

  closeFavorites(): void {
    this.isFavoritesVisible = false;
  }
}