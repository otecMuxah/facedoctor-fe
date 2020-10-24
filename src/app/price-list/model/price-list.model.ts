export interface PriceListModel {
  name: string;
  description: string;
  group: { id: number, name: string };
  sub_group: number;
  price: number;
}
