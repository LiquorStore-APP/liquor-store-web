import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {CurrencyPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sale-details',
  imports: [
    MatDialogContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    CurrencyPipe,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatHeaderRowDef,
    MatDialogTitle
  ],
  templateUrl: './sale-details.component.html',
  standalone: true,
  styleUrl: './sale-details.component.css'
})
export class SaleDetailsComponent {
  detalleColumns: string[] = [
    'idDetalleVenta',
    'productoDetalleVenta',
    'cantidadDetalleVenta',
    'precioDetalleVenta',
    'subutilidadDetalleVenta',
    'subTotalDetalleVenta',
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) {}
}
