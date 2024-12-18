export interface ProductRequest {
  id?: number;
  nombreProducto: string;
  costoProducto: number;
  precioProducto: number;
  idCategoriaProductos: number;
  stockProducto: number;
  rutaimagenProducto: string;
}


export interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  cost: number;
  imageUrl: string;
}