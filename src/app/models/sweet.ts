export interface Sweet {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFavorite?: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  type: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}