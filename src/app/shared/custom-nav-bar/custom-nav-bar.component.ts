import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-custom-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink
  ],
  templateUrl: './custom-nav-bar.component.html',
  styleUrl: './custom-nav-bar.component.css'
})
export class CustomNavBarComponent {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    // Suscríbete al contador del carrito
    this.cartService.getCartItemCount().subscribe((count) => {
      this.cartItemCount = count;
    });

    this.cartService.updateCartItemCount();
  }


}
