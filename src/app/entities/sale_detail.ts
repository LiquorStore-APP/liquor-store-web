export interface SaleDetail {
    id?: number;
    saleId?: number;
    price: number;
    cost: number;
    total: number;
    quantity: number;
    totalUtility: number;
}

export interface SaleDetailRequest {
  id?: number;
  idVenta?: number;
  productoDetalleVenta: string;
  cantidadDetalleVenta: number;
  precioDetalleVenta: number;
  subutilidadDetalleVenta: number;
  subTotalDetalleVenta: number;
}
