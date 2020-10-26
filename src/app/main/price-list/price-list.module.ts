import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import { RouterModule } from '@angular/router';
import { priceRoutes } from './price-list.routes';
import {PriceListService} from './price-list.service';
import {HttpClient} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [PriceListComponent],
  imports: [CommonModule, RouterModule.forChild(priceRoutes), MatTableModule, MatTabsModule]
})
export class PriceListModule {}
