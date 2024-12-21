export interface Cart {
  products: CartProduct[];
}

export interface CartProduct {
  id?: number;
  name: string;
  cost: number;
  utility: number;
  price: number;
  quantity: number;
  total: number;
  totalUtility: number;
}
