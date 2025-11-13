import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { StepsComponent } from './components/steps/steps';
import { CategoriesComponent } from './components/categories/categories';
import { FeaturedSweetsComponent } from './components/featured-sweets/featured-sweets';
import { FooterComponent } from './components/footer/footer';
import { ToastComponent } from './components/toast/toast';
import { routes } from './app.routes';
import { AboutComponent } from "./components/about/about";
import { ProductDetailComponent } from "./components/product-detail/product-detail";
import { FavoritesComponent } from "./components/favorites/favorites";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    StepsComponent,
    CategoriesComponent,
    FeaturedSweetsComponent,
    AboutComponent,
    FooterComponent,
    ToastComponent,
    ProductDetailComponent,
    FavoritesComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Sweet Shop';

  onCategorySelected(category: string): void {
    // This method will be called when a category is selected
    console.log('Category selected:', category);
  }
}
export const appConfig: ApplicationConfig= {
  providers: [
    provideRouter(routes)
  ]
};