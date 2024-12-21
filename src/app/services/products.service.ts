import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product, ProductRequest, ProductResponse} from '../entities/product';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string; // URL base de la API

  private apiUrl: string; // Ruta de la API

  constructor(private http: HttpClient) {

      this.baseUrl = environment.apiUrl;
      this.apiUrl = this.baseUrl + '/products';

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse[]>(this.apiUrl).pipe(
      map((products: ProductResponse[]) =>
        products.map((product) => this.mapProductResponseToProduct(product))
      )
    );
  }

  // Mapper: convierte Producto a ProductoMapped
  private mapProductResponseToProduct(producto: ProductResponse): Product {
    return {
      id: producto.id,
      name: producto.nombreProducto,
      price: producto.precioProducto,
      stock: producto.stockProducto,
      cost: producto.costoProducto,
      imageUrl: `images/test.jpg`,
      category: producto.nombreCategoriaProducto,
      // imageUrl: `images/${producto.rutaimagenProducto}`
    };
  }

  // Mapper: convierte Producto a ProductoMapped
  private mapProductToProductRequest(producto: Product): ProductRequest {
    return {
      id: producto.id,
      nombreProducto: producto.name,
      precioProducto: producto.price,
      stockProducto: producto.stock,
      costoProducto: producto.cost,
      rutaimagenProducto: producto.imageUrl,
      idCategoriaProductos: 1,
    };
  }

  addProduct(newProduct: any) {
    const newProductRequest = this.mapProductToProductRequest(newProduct);
    return this.http.post(this.apiUrl, newProductRequest);
  }
}
