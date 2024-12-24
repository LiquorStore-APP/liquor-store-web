import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {SaleDetailsComponent} from './sale-details/sale-details.component';
import {SalesService} from '../../services/sales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatDialogContent,
    DatePipe,
    CurrencyPipe,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatRow,
    MatHeaderRow,
    MatDialogTitle,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './sales.component.html',
  standalone: true,
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  // ventas = [
  //   {
  //     idVenta: 5,
  //     clienteVenta: 'Cliente 1',
  //     fechaVenta: '2024-12-24T03:00:56.101+00:00',
  //     montoTotalVenta: 492.0,
  //     utilidadTotalVenta: 222.0,
  //     detalleVentas: [
  //       {
  //         idDetalleVenta: 7,
  //         productoDetalleVenta: 123,
  //         cantidadDetalleVenta: 12,
  //         precioDetalleVenta: 246.0,
  //         subutilidadDetalleVenta: 2.0,
  //         subTotalDetalleVenta: 111.0,
  //       },
  //       {
  //         idDetalleVenta: 8,
  //         productoDetalleVenta: 123,
  //         cantidadDetalleVenta: 12,
  //         precioDetalleVenta: 246.0,
  //         subutilidadDetalleVenta: 2.0,
  //         subTotalDetalleVenta: 111.0,
  //       },
  //     ],
  //   },
  // ];

  ventas: any[] = [];

  displayedColumns: string[] = [
    'idVenta',
    'clienteVenta',
    'fechaVenta',
    'montoTotalVenta',
    'utilidadTotalVenta',
    'acciones',
  ];

  constructor(private dialog: MatDialog, private salesService: SalesService) {
  }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(sales => {
      this.ventas = sales;
      console.log(this.ventas);
    });
  }

  verDetalle(venta: any) {
    this.dialog.open(SaleDetailsComponent, {
      data: venta.detalleVentas,
      width: '600px',
    });
  }
}
