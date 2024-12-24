import {SaleDetail, SaleDetailRequest} from './sale_detail';

export interface Sale{
  id?: number;
  date: string;
  saleDetails: SaleDetail[];
}

export interface SaleRequest{
  id?: number;
  nombreCliente: string;
  fechaVenta: string;
  idMedioPagoVenta:number,
  montoTotalVenta: number,
  utilidadTotalVenta: number,
  detalleVenta: SaleDetailRequest[];
}
