import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {ProductsService} from '../../services/products.service';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {CartProduct} from '../../entities/cart';
import {FormsModule} from '@angular/forms';
import {SalesService} from '../../services/sales.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-cart',
  imports: [
    MatFormField,
    MatInput,
    MatProgressSpinner,
    MatTable,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatLabel,
    NgIf,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    MatIconButton,
    RouterLink,
    MatButton,
    FormsModule
  ],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.css'
})
export class CartComponent {
  displayedColumns: string[] = ['name','price', 'cost', 'quantity','total','totalUtility', 'actions'];
  dataSource = new MatTableDataSource<CartProduct>();
  loading = true;

  constructor(private notificationsService: NotificationService , private cartService: CartService, private salesService: SalesService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.dataSource.data = this.cartService.getCart().products;
    this.loading = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onQuantityChange(element: CartProduct) {
    element.total = element.quantity * element.price;
  }

  deleteProductFromCart(id:any) {
    this.cartService.deleteProduct(id);
    this.loadProducts();
  }

  saveSale() {
    this.salesService.addSale(
      {
        date: new Date().toDateString(),
      }
    ).subscribe(
      (sale) => {
        this.notificationsService.openSnackBarWithTime("Venta guardada correctamente.", "Cerrar", 1500);
        console.log(sale);
        // this.cartService.getCart().products.forEach(product => {
        //   this.salesService.addProductToSale(sale.id, product.id, product.quantity).subscribe();
        // });
        // this.cartService.clearCart();
        // this.loadProducts();
      },
      (error) => {
        console.error('Error al agregar el producto', error);
      }
    );
  }
}
