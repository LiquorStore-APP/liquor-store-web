import { Injectable } from '@angular/core';
import {Product} from '../entities/product';
import {CartProduct, Cart} from '../entities/cart';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private key = 'cart';
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor(private notificationService: NotificationService) {}

  // Obtener el carrito desde la sesión
  getCart(): Cart {
    const cartData = sessionStorage.getItem(this.key);
    if (cartData) console.log(JSON.parse(cartData));
    return cartData ? JSON.parse(cartData) : { products: [] };
  }

  saveCart(cart: any): void {
    sessionStorage.setItem(this.key, JSON.stringify(cart));
    this.updateCartItemCount()
  }

  addProduct(product: Product | undefined, quantity: any, callback:any): void {
    const cart = this.getCart();
    if (product) {
      const existingProduct = cart.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.total = existingProduct.price * existingProduct.quantity;
      } else {
        var newCartProduct: CartProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          total: product.price * quantity,
        }
        cart.products.push(newCartProduct);
      }
    }
    this.saveCart(cart);
    callback();
  }

  deleteProduct(productoId: number): void {
    const carrito = this.getCart();
    carrito.products = carrito.products.filter((p => p.id !== productoId));
    this.saveCart(carrito);
  }

  clearCart(): void {
    this.updateCartItemCount()
    sessionStorage.removeItem(this.key);
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  updateCartItemCount() {
    const totalCount = this.getCart().products.length;
    this.cartItemCount.next(totalCount); // Notifica a los suscriptores
  }

}
