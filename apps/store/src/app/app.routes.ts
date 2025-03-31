
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    loadChildren: () => import('checkout/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'products',
    loadChildren: () => import('products/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '', redirectTo : '/checkout', pathMatch: 'full'
  },
];
