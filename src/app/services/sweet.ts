import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sweet, Category, Step } from '../models/sweet';
  providedIn: 'root'
@Injectable({
  providedIn: 'root'
})
export class SweetService {
    
  private selectedCategorySubject = new BehaviorSubject<string>('all');
  public selectedCategory$ = this.selectedCategorySubject.asObservable();
  
  getSteps(): Step[] {
    return [
      {
        number: 1,
        title: 'Premium Quality',
        description: 'Only the finest ingredients in every bite',
        icon: '🔥'
      },
      {
        number: 2,
        title: 'Fresh Daily',
        description: 'Baked fresh every morning',
        icon: '⚙️'
      },
      {
        number: 3,
        title: 'Milk Guaranteed',
        description: 'Unrestated or sourced',
        icon: '🥛'
      }
    ];
  }

  getCategories(): Category[] {
    return [
      {
        id: 1,
        name: 'Cakes',
        description: 'Soft, moist, and irresistibly delicious — the perfect treat for every sweet moment! 🍰',
        image: 'data:image/jpeg;base64,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',
        type: 'cakes'
    },
      {
        id: 2,
        name: 'Cupcakes',
        description: 'Mini delights full of flavor! Perfect for sharing, gifting, or indulging in a personal treat. 🧁',
        image: 'https://media.istockphoto.com/id/474648538/photo/set-of-different-cupcakes-in-a-box.jpg?s=612x612&w=0&k=20&c=wXFiIqvQPSqOp7qq1wk3L15IlsJUrudrPXnPztWgOZY=',
      type: 'cupcakes'
      },
      {
        id: 3,
        name: 'Cookies',
        description: 'Crispy on the edges, soft at the center — a perfect treat for any time of day! 💛',
        image: 'https://plus.unsplash.com/premium_photo-1672073875528-d4c97893a310?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      type: 'cookies'
      },
       {
        id: 4,
        name: 'Chocolates & Truffles',
        description: 'Decadent chocolates and truffles made to melt in your mouth and delight every chocolate lover. 🍫',
        image: 'https://media.istockphoto.com/id/1129134129/photo/sweets-at-a-wedding.jpg?s=612x612&w=0&k=20&c=oDD5Uw6wTDe_S-X4_csww3H9itR3UmojMNmEi0yk1dA=',
      type: 'chocolates & Truffles'
      },
      {
        id: 5,
        name: 'Brownies & Hot Desserts',
        description: 'Rich, fudgy, and comforting — the perfect warm desserts to satisfy your sweet cravings.',
        image: 'https://images.unsplash.com/photo-1606884285898-277317a7bf12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEElMjB3YXJtJTJDJTIwZ29vZXklMjBicm93bmllJTIwaW4lMjBhJTIwc21hbGwlMjBkaXNoJTIwd2l0aCUyMGElMjBzY29vcCUyMG9mJTIwaWNlJTIwY3JlYW0lMjBvbiUyMHRvcC58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800',
      type: 'brownies & Hot Desserts'
      },
      {
        id: 6,
        name: 'Donuts & Pastries',
        description: 'Soft, sweet, and fun — our donuts and pastries are perfect for breakfast, snacking, or dessert. 🍩',
        image: 'https://media.istockphoto.com/id/2221094108/photo/colorful-and-appetizing-glazed-donuts-displayed-in-a-bakery-shop-window.jpg?s=612x612&w=0&k=20&c=1x255ItH67_HLGTFMRal0mQccS6cjS5HMeIvMp1W9xU=',
      type: 'donuts & Pastries'
      },
        {
        id: 7,
        name: 'Beverages',
        description: 'Refreshing and energizing — explore our selection of coffees, shakes, and specialty beverages. ☕',
        image: 'https://plus.unsplash.com/premium_photo-1695750678195-beb8ba487094?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400',
      type: 'beverages'
      },
      {
        id: 8,
        name: 'Sweets & Treats',
        description: 'Bite-sized delights for every occasion — sweet treats that bring joy to every moment! 🎉',
        image: 'https://images.unsplash.com/photo-1660898972889-26da908b2b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400',
     type: 'sweets & Treats'
      },
      
    ];
  }

  getAllSweets(): Sweet[] {
    return [
      {
        id: 1,
        name: 'Chocolate Mousse Cake',
        description: 'Light, airy, and decadently chocolatey — a true melt-in-mouth dessert.',
        price: 1650,
        image: 'https://images.unsplash.com/photo-1761637604893-f049f46d2bcd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hvY29sYXRlJTIwTW91c3NlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800',
        category: 'cakes'
      },
      {
        id: 2,
        name: 'Fudge Cake',
        description: 'Dense, rich, and delightfully gooey — heaven for every chocolate lover.',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1610850775639-d47c1c81040c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZ1ZGdlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800',
        category: 'cakes'
      },
      {
        id: 3,
        name: 'Chocolate Delight',
        description: 'A rich and creamy chocolate indulgence that melts in your mouth.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1740742766041-0893904fa774?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENob2NvbGF0ZSUyMERlbGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400',
        category: 'chocolates & Truffles'
      },
      {
        id: 4,
        name: 'Assorted Cupcakes Box',
        description: 'A colorful mix of flavors, beautifully baked and ready to share.',
        price: 1950,
        image: 'https://media.istockphoto.com/id/614426848/photo/six-colorful-cupcakes-decorated-with-sprinkles-and-strawberries.jpg?s=612x612&w=0&k=20&c=yX6_Qg2jiXi9mOEWGNb1pQ4_FC1O8EFDjqG88FfomRA=',
        category: 'cupcakes'
      },
       {
        id: 5,
        name: 'Chocolate Chip Cookies',
        description: 'Crispy on the edges, soft inside, loaded with chocolate chips.',
        price: 600,
        image: 'https://media.istockphoto.com/id/1294238220/photo/vegan-homemade-chocolate-chunk-cookies-on-cooling-rack-flat-lay.jpg?s=612x612&w=0&k=20&c=Vk36zx_q_4hSqtLvq1EozhxTJm1p3ckAczslharNjY4=',
        category: 'cookies'
      },
      {
        id: 6,
        name: 'Caramel Swirl Marshmallows',
        description: 'SSoft, fluffy, and swirled with buttery caramel goodness',
        price: 1300,
        image: 'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/2019/sep/2019_caramel-swirl-marshmallows_20944_600x600.jpg?ext=.jpg',
        category: 'sweets & Treats'
      },
       {
        id: 7,
        name: 'Hot Brownie',
        description: 'Warm, fudgy, and irresistible — best with a scoop of ice cream.',
        price: 1350,
        image: 'https://media.istockphoto.com/id/1273854630/photo/melted-hot-chocolate-pouring-over-browine.jpg?s=612x612&w=0&k=20&c=kz0XecMLKd63OUozUTtAQnROMU5_a92kv4zchZGkCys=',
        category: 'brownies & Hot Desserts'
      },
      {
        id: 8,
        name: 'Iced Americano',
        description: 'Cool, bold, and refreshing — the perfect boost for your day.',
        price: 900,
        image: 'https://images.unsplash.com/photo-1527156231393-7023794f363c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEljZWQlMjBBbWVyaWNhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        category: 'beverages'
      },
       
      {
        id: 9,
        name: 'Red Velvet Cake',
        description: 'SSoft red layers with smooth cream cheese frosting — elegant and indulgent.',
        price: 1590,
        image: 'https://media.istockphoto.com/id/2177115085/photo/delicious-red-velvet-cake-standing-on-glass-cake-stand.jpg?s=612x612&w=0&k=20&c=rT7E6NP5IBDwOqgVrDdCWMJkLPLvA-qjsqkcnfZVBek=',
        category: 'cakes'
      },
       {
        id: 10,
        name: 'Single Cupcake',
        description: 'Sweet, fluffy, and full of joy — a perfect little treat.',
        price: 850,
        image: 'https://images.unsplash.com/photo-1640806353538-92532f3dc6c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
        category: 'cupcakes'
      },
      {
        id: 11,
        name: 'Glazed Donuts',
        description: 'Soft, fluffy, and topped with a shiny sugar glaze.',
        price: 750,
        image: 'https://images.unsplash.com/photo-1685779923180-b78b6b8231b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
        category: 'donuts & Pastries'
      },
       {
        id: 12,
        name: 'Chocolate Truffles',
        description: 'Smooth, rich, and luxurious — handcrafted bites of chocolate bliss.',
        price: 1400,
        image: 'https://plus.unsplash.com/premium_photo-1667031518595-9cb4b0d504ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hvY29sYXRlJTIwVHJ1ZmZsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        category: 'chocolates & Truffles'
      },
      {
        id: 13,
        name: 'Carrot Cake',
        description: 'Moist and spiced with a creamy frosting — wholesome and sweet.',
        price: 1400,
        image: 'https://media.istockphoto.com/id/2070592588/photo/homemade-carrot-sandwich-cake.jpg?s=612x612&w=0&k=20&c=Q5FPVr4fA3mebXok15XtsY48LnLj8LAExWQLNSEJGWo=',
        category: 'cakes'
      },
      {
        id: 14,
        name: 'Black Forest Cake',
        description: 'Layers of chocolate sponge, whipped cream, and cherries — a timeless favorite.',
        price: 1800,
        image: 'https://media.istockphoto.com/id/182895267/photo/black-forest-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=50xdu-hTN5qvk1MjrnKhN5-9Fs6ItHRr9p_lKCcy-9o=',
        category: 'cakes'
      },
    
      {
        id: 15,
        name: 'Mini Cupcakes',
        description: 'Bite-sized cupcakes packed with flavor and cuteness.',
        price: 300,
        image: 'https://media.istockphoto.com/id/1214941877/photo/pastel-color-cakes-sweet-table.jpg?s=612x612&w=0&k=20&c=tzSzartL7oSlrI2cK6Q0u2uedFBIhiC6S_ZC0Ck3qjw=',
        category: 'cupcakes'
      },
      {
        id: 16,
        name: 'Chocolate Ganaches',
        description: 'Soft-centered chocolate cookies with creamy ganache filling.',
        price: 800,
        image: 'https://media.istockphoto.com/id/1289877655/photo/chocolate-cupcake-tasty-cupcakes-with-ganache-muffin.webp?a=1&b=1&s=612x612&w=0&k=20&c=BuJhAFXnQWyyN_j70rl64yu8SlGNlryJTiFr1v_slLA=',
        category: 'cupcakes'
      },
       {
        id: 17,
        name: 'Oatmeal Cookies',
        description: 'Chewy, hearty, and perfectly sweet — a wholesome delight.',
        price: 400,
        image: 'https://media.istockphoto.com/id/2189255468/photo/cookies-chocolate-chip-and-hazelnut-cookies.jpg?s=612x612&w=is&k=20&c=ojqH_oUeQBhcszzzyX_ZcgDkZ6dItUjGipY3rP1tpmk=',
        category: 'cookies'
      },
      
      {
        id: 18,
        name: 'Peanut Butter Cookies',
        description: 'Sweet, nutty, and crumbly — a classic comfort cookie.',
        price: 500,
        image: 'https://media.istockphoto.com/id/1268234574/photo/peanut-butter-cookies.webp?a=1&s=612x612&w=0&k=20&c=Ahfe4JYkVX7PtpJ0iepxe-jna_DsOCnVhSblxbAkoIU=',
        category: 'cookies'
      },
      {
        id: 19,
        name: 'Lava Cake',
        description: 'Gooey molten center that flows with every bite.',
        price: 1400,
        image: 'https://media.istockphoto.com/id/2176060366/photo/delicious-chocolate-lava-cake-oozing-with-melted-chocolate.jpg?s=612x612&w=0&k=20&c=u0CrDIjCc30dMEy_jcaTF1ZaIWZB4fOkpqNpTQ2n-00=',
        category: 'brownies & Hot Desserts'
      },
      
      {
        id: 20,
        name: 'Blondies',
        description: 'Sweet and buttery with a soft caramel flavor — the brownie’s golden cousin.',
        price: 1400,
        image: 'https://media.istockphoto.com/id/157637985/photo/blondies.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZzLdmH9JRo2ITD1YATEQURjx6uewGhUbBGbx2qJzRk0=',
        category: 'brownies & Hot Desserts'
      },
      
      {
        id: 21,
        name: 'Chocolate candies',
        description: 'Sweet, bite-sized treats for every chocolate craving.',
        price: 1060,
        image: 'https://images.unsplash.com/photo-1740631599959-152ee0968f40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENob2NvbGF0ZS1Db3ZlcmVkJTIwTnV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800',
        category: 'chocolates & Truffles'
      },
      {
        id: 22,
        name: 'Eclairs',
        description: 'Light pastry filled with creamy custard and topped with chocolate.',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1582217308209-2207886c55bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
        category: 'donuts & Pastries'
      },
      {
        id: 23,
        name: 'Danish Pastries',
        description: 'Flaky layers with buttery sweetness — a delightful pastry treat.',
        price: 1140,
        image: 'https://plus.unsplash.com/premium_photo-1673282160288-9d5381f471af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFuaXNoJTIwUGFzdHJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800',
        category: 'donuts & Pastries'
      },
      
       {
        id: 24,
        name: 'Chocolate Donuts',
        description: 'Rich chocolate glaze over a soft donut base — a sweet indulgence.',
        price: 1250,
        image: 'https://plus.unsplash.com/premium_photo-1672846027103-a50797886f99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hvY29sYXRlJTIwRG9udXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800',
        category: 'donuts & Pastries'
      },
      
      
      {
        id: 25,
        name: 'Milkshakes',
        description: 'Thick, creamy, and delicious — available in multiple flavors.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlsa3NoYWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800',
        category: 'beverages'
      },
      {
        id: 26,
        name: 'Chocalate cookie frappe',
        description: 'A frosty blend of cookies and chocolate — pure refreshment.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWlsa3NoYWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800',
        category: 'beverages'
      },
      {
        id: 27,
        name: 'Hot Chocolate',
        description: 'Creamy, rich cocoa comfort in every sip.',
        price: 980,
        image: 'https://images.unsplash.com/photo-1637572815755-c4b80092dce1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwQ2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800',
        category: 'beverages'
      },
     
       {
        id: 28,
        name: 'Jelly Candies',
        description: 'Sweet, chewy, and fruity — a pop of color and flavor in every bite.',
        price: 700,
        image: 'https://images.unsplash.com/photo-1617627191898-1408bf607b4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmVsbHklMjBDYW5kaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800',
        category: 'sweets & Treats'
      }, 
       {
        id: 29,
        name: 'Macarons',
        description: 'Luxuriously smooth bites of rich chocolate perfection.',
        price: 1640,
        image: 'https://plus.unsplash.com/premium_photo-1675806021714-8f33e130a28a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjYXJvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800',
        category: 'sweets & Treats'
      },
      {
        id: 30,
        name: 'Lollipops',
        description: 'Colorful, fun, and perfect for every age.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1687499466474-df90c4d7a54a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9sbGlwb3BzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800',
        category: 'sweets & Treats'
      },
    ];
  }

     getFeaturedSweets(category: string = 'all'): Sweet[] {
    const allSweets = this.getAllSweets();
    
    if (category === 'all') {
      return allSweets;
    }
    
    return allSweets.filter(sweet => sweet.category === category);
  }

  setSelectedCategory(category: string): void {
    this.selectedCategorySubject.next(category);
  }

  getSelectedCategory(): string {
    return this.selectedCategorySubject.value;
  }

  // Helper method to get category by type
  getCategoryByType(type: string): Category | undefined {
    return this.getCategories().find(cat => cat.type === type);
  }
}