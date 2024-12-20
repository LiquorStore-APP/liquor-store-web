import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {CartService} from '../../services/cart.service';
import {Product} from '../../entities/product';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    MatInputModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatCardActions,
    MatCardImage,
    MatInput,
    MatButton,
    MatProgressSpinner,
    NgIf,
    NgStyle
  ],
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter<number>();
  @Output() removeFromCart = new EventEmitter<void>();
  loading = true;

  constructor(private cartService: CartService, private notificationService: NotificationService) {
  }

  onAddToCart() {
    this.addToCart.emit(1);

    this.cartService.addProduct(this.product, 1, () => {
      this.notificationService.openSnackBarWithTime('Carrito actualizado correctamente.', 'Cerrar', 1500);
    });




  }

  onRemoveFromCart() {
    this.removeFromCart.emit();
  }
  onImageLoad(evt: any) {
    console.log('Image loaded');
    console.log(evt);
    this.loading = false;
  }
}
