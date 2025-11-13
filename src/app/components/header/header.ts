import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart';
import { FavoritesService } from '../../services/favorites';
import { FavoritesComponent } from '../favorites/favorites';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    CartComponent, 
   
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  brandName = 'Sweet Haven';
  searchTerm: string = '';
  isSearchFocused: boolean = false;
  isMobileMenuOpen: boolean = false;
  isProfileOpen: boolean = false;
   favoritesCount = 0;
  
  private headerHeight = 80;
  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '👤',
    memberSince: '2024',
    favoriteItems: 12,
    ordersCount: 5
  };

  constructor(
    private router: Router, 
    private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.checkMobileMenuState();
    this.favoritesService.favorites$.subscribe(favorites => {
      this.favoritesCount = favorites.length;
    });
  }
   toggleFavorites(): void {
    // This will be handled by the favorites component
    const favoritesComponent = document.querySelector('app-favorites') as any;
    if (favoritesComponent) {
      favoritesComponent.toggleFavorites();
    }
  }

  scrollToSection(sectionId: string): void {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - this.headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
  toggleProfile(): void {
    this.isProfileOpen = !this.isProfileOpen;
    // Close mobile menu if open when opening profile
    if (this.isProfileOpen && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  closeProfile(): void {
    this.isProfileOpen = false;
  }
 
   navigateToHome(): void {
    this.router.navigate(['/home']).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
    viewOrders(): void {
    console.log('Navigate to orders');
    this.closeProfile();
  }

  viewFavorites(): void {
    console.log('Navigate to favorites');
    this.closeProfile();
  }

  viewSettings(): void {
    console.log('Navigate to settings');
    this.closeProfile();
  }

  signOut(): void {
    console.log('Sign out user');
    this.closeProfile();
  }

  signIn(): void {
    console.log('Navigate to sign in');
    this.closeProfile();
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    // Close profile if clicking outside
    if (this.isProfileOpen && 
        !target.closest('.profile-sidebar') && 
        !target.closest('.user-profile-trigger')) {
      this.closeProfile();
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkMobileMenuState();
  }

  private checkMobileMenuState(): void {
    if (window.innerWidth >= 992 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  onSearchFocus(): void {
    this.isSearchFocused = true;
  }

  onSearchBlur(): void {
    this.isSearchFocused = false;
  }

  performSearch(): void {
    if (this.searchTerm.trim()) {
      console.log('Searching for:', this.searchTerm);
      if (window.innerWidth < 992) {
        this.closeMobileMenu();
      }
    }
  }

  onMobileMenuToggle(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.toggleBodyScroll();
  }

  onNavLinkClick(): void {
    if (window.innerWidth < 992) {
      this.closeMobileMenu();
    }
  }

  private closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.toggleBodyScroll();
    
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  private toggleBodyScroll(): void {
    if (this.isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }
}