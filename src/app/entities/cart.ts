export interface Cart {
  products: CartProduct[];
}

export interface CartProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}
