import { computed, Injectable, signal } from '@angular/core';
import { DessertResponse } from '../interfaces/dessert.interface';
import { Shop } from '../interfaces/shop.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShopService {
  private _shop = signal<Shop[]>([]);

  addShop(dessert: DessertResponse) {
    const isShopping = this._shop().find(
      (element) => element.name === dessert.name
    );

    if (!isShopping) {
      this._shop.update((element) => [...element, { ...dessert, quantity: 1 }]);
    } else {
      this._shop.update((element) =>
        element.map((e) =>
          e.name === dessert.name ? { ...e, quantity: e.quantity + 1 } : e
        )
      );
    }
  }

  lessShop(dessert: DessertResponse) {
    const isShopping = this._shop().find(
      (element) => element.name === dessert.name
    );

    if (isShopping && isShopping.quantity>1 ) {
      this._shop.update((element) =>
        element.map((e) =>
          e.name === dessert.name ? { ...e, quantity: e.quantity - 1 } : e
        )
      );
    }

    console.log(this._shop());
  }

  removeShop( shop: Shop ){
    this._shop.update( (element) => element.filter( (e) => e.name !== shop.name ) )
  }

  get shop() {
    return this._shop;
  }

  get totalShop() {
    const total = computed(() =>
      this._shop().reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      )
    );
    return total;
  }

  get countShop() {
    const total = computed(() =>
      this._shop().reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      )
    );
    return total;
  }
}
