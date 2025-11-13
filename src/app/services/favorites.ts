import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sweet } from '../models/sweet';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'sweetHaven_favorites';
  private favoritesSubject = new BehaviorSubject<Sweet[]>(this.getFavoritesFromStorage());
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {}

  private getFavoritesFromStorage(): Sweet[] {
    if (typeof window !== 'undefined' && localStorage) {
      const stored = localStorage.getItem(this.favoritesKey);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  }

  private saveFavoritesToStorage(favorites: Sweet[]): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  addToFavorites(sweet: Sweet): void {
    const favorites = this.getFavoritesFromStorage();
    if (!favorites.find(item => item.id === sweet.id)) {
      favorites.push(sweet);
      this.saveFavoritesToStorage(favorites);
      this.favoritesSubject.next(favorites);
    }
  }

  removeFromFavorites(sweetId: number): void {
    const favorites = this.getFavoritesFromStorage();
    const updatedFavorites = favorites.filter(item => item.id !== sweetId);
    this.saveFavoritesToStorage(updatedFavorites);
    this.favoritesSubject.next(updatedFavorites);
  }

  isFavorite(sweetId: number): boolean {
    const favorites = this.getFavoritesFromStorage();
    return favorites.some(item => item.id === sweetId);
  }

  getFavorites(): Sweet[] {
    return this.getFavoritesFromStorage();
  }

  clearFavorites(): void {
    this.saveFavoritesToStorage([]);
    this.favoritesSubject.next([]);
  }
}