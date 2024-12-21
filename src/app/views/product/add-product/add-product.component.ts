import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from '../../../services/products.service';
import {Router} from '@angular/router';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-add-product',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatInput,
    NgIf,
    MatError,
    MatLabel
  ],
  templateUrl: './add-product.component.html',
  standalone: true,
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addProductForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      cost: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct = this.addProductForm.value;
      this.productService.addProduct(newProduct).subscribe(
        () => {
          this.notificationService.openSnackBar('Producto agregado exitosamente', 'Cerrar');
          console.log('Producto agregado exitosamente');
          this.router.navigate(['/catalogue']);
        },
        (error) => {
          this.notificationService.openSnackBar('Error al agregar el producto.', 'Cerrar');
          console.error('Error al agregar el producto', error);
          console.error(newProduct)
        }
      );
    }
  }
}
