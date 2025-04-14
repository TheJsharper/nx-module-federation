
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    //loadChildren: () => import('checkout/Routes').then((m) => m.remoteRoutes),
    loadChildren: () => loadRemote<typeof import('checkout/Routes')>('checkout/Routes').then((m) => m!.remoteRoutes),

  },
  {
    path: 'products',
   // loadChildren: () => import('products/Routes').then((m) => m.remoteRoutes),
   loadChildren: () => loadRemote<typeof import('products/Routes')>('products/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '', redirectTo : '/checkout', pathMatch: 'full'
  },
];
