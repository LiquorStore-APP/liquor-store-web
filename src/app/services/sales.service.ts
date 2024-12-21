import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Sale} from '../entities/sale';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl: string; // URL base de la API

  private apiUrl: string; // Ruta de la API

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.apiUrl = this.baseUrl + '/sales';
}

  addSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, sale);
  }

  // addSaleDetail(cartProduct: CartProduct): Observable<SaleDetail> {
  //   return this.http.post<SaleDetail>(this.apiUrl + "_details", saleDetail);
  // }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }
}
