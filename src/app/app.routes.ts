import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalogue',
    loadComponent: () => import('./views/catalogue/catalogue.component').then(m => m.CatalogueComponent),
  },
  {
    path: 'inventory',
    loadComponent: () => import('./views/inventory/inventory.component').then(m => m.InventoryComponent),
  },
  {
    path: 'sales',
    loadComponent: () => import('./views/sales/sales.component').then(m => m.SalesComponent),
  },
];
