import { Component } from '@angular/core';
import {ProductCardComponent} from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-catalogue',
  imports: [
    ProductCardComponent
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
    imageUrl: 'https://miamarket.pe/assets/uploads/64a4b3f824e86eaa7df34d853e6bfedf.jpg'
  };

  onAddToCart(amount: number) {
    console.log(`Agregar ${amount} al carrito`);
  }

  onRemoveFromCart() {
    console.log('Eliminar del carrito');
  }
}
