import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceListModel } from './model/price-list.model';

@Injectable({
  providedIn: 'root',
})
export class PriceListService {
  constructor(private _http: HttpClient) {}

  public prices$: Observable<PriceListModel[]> = this._http.get<
    PriceListModel[]
  >('http://127.0.0.1:8000/api/price/');
}
