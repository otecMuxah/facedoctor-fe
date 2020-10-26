import { Routes } from '@angular/router';
import { PriceListComponent } from './price-list.component';
import { routerStates } from '../routing/router-states';

export const priceRoutes: Routes = [
  {
    path: routerStates.price.url,
    component: PriceListComponent,
    data: { title: routerStates.price.name },
  },
];
