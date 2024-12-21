import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from '../../../services/products.service';
import {Router} from '@angular/router';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {NotificationService} from '../../../services/notification.service';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-add-product',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatFormField,
    MatButton,
    MatInput,
    NgIf,
    MatError,
    MatLabel,
    MatIcon
  ],
  templateUrl: './add-product.component.html',
  standalone: true,
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  addProductForm: FormGroup;
  selectedFile: any;



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
      image: [null],
    });
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct = this.addProductForm.value;
      newProduct.image = this.selectedFile;
      this.productService.addProduct(newProduct).subscribe(
        () => {
          this.notificationService.openSnackBar('Producto agregado exitosamente', 'Cerrar');
          this.router.navigate(['/catalogue']);
        },
        (error) => {
          this.notificationService.openSnackBar('Error al agregar el producto.', 'Cerrar');
          console.error('Error al agregar el producto', error);
        }
      );
    }
  }

  public GetFileOnLoad(event: any) {
    var file = event.target.files[0];
    var element = document.getElementById("fakeFileInput") as HTMLInputElement | null;
    if (element != null && file) {
      element.value = file?.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFile = reader.result as string;
      };
      reader.readAsDataURL(file);

    }
  }
}
