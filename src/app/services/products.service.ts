import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product, ProductRequest} from '../entities/product';
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
    return this.http.get<ProductRequest[]>(this.apiUrl).pipe(
      map((products: ProductRequest[]) =>
        products.map((product) => this.mapProductRequestToProduct(product))
      )
    );
  }

  // Mapper: convierte Producto a ProductoMapped
  private mapProductRequestToProduct(producto: ProductRequest): Product {
    return {
      id: producto.id,
      name: producto.nombreProducto,
      price: producto.precioProducto,
      stock: producto.stockProducto,
      cost: producto.costoProducto,
      imageUrl: `images/test.jpg`
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
      nombreCategoriaProducto: "TEST",
    };
  }

  addProduct(newProduct: any) {
    const newProductRequest = this.mapProductToProductRequest(newProduct);
    return this.http.post(this.apiUrl, newProductRequest);
  }
}
