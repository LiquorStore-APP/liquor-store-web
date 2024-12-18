import { Component } from '@angular/core';
import {ProductCardComponent} from '../../shared/product-card/product-card.component';
import {ProductsService} from '../../services/products.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-catalogue',
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './catalogue.component.html',
  standalone: true,
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  product = {
    name: 'Coca Cola',
    price: 2.00,
    stock: 20,
    cost: 1.70,
    imageUrl: 'images/test.jpg'
  };

  products: any[] = [];


  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  onAddToCart(amount: number) {
    console.log(`Agregar ${amount} al carrito`);
  }

  onRemoveFromCart() {
    console.log('Eliminar del carrito');
  }
}
