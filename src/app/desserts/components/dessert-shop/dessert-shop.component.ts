import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { CurrencyPipe } from '@angular/common';
import { Shop } from '../../interfaces/shop.interface';

@Component({
  selector: 'dessert-shop',
  imports: [ CurrencyPipe],
  templateUrl: './dessert-shop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertShopComponent {
  shopService = inject(ShopService);

  shop = this.shopService.shop;
  count = this.shopService.countShop
  orderTotal = this.shopService.totalShop

  delete(item: Shop){
    this.shopService.removeShop(item)
  }
}
