import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PriceListService } from './price-list.service';
import { PriceListModel } from './model/price-list.model';

@Component({
  selector: 'fd-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'description', 'price'];
  public groupedPrice = {};
  public tabNames: Set<string> = new Set<string>();

  constructor(public priceService: PriceListService) {}

  ngOnInit(): void {
    this.priceService.prices$.subscribe((priceList: PriceListModel[]) => {
      priceList.forEach((el) => {
        (this.groupedPrice[el?.group?.name] ??= []).push(el);
        this.tabNames.add(el?.group?.name);
      });
    });
    console.log(this.tabNames, this.groupedPrice);
  }
}
