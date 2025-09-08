import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DessertResponse } from '../interfaces/dessert.interface';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  private _http = inject(HttpClient);
  private _url = '/product-list-with-cart-main/data.json'

  getDessertList():Observable<DessertResponse[]>{
    return this._http.get<DessertResponse[]>(`${this._url}`)
  }



}
