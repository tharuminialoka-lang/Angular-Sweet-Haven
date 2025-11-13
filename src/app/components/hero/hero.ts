import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  heroTitle = 'Indulge in Sweet Perfection' ;
  heroDescription = 'Unrestated and mixed with onion, potato, and the fruit ingredients. Early diseases are recommended for daily.';
}