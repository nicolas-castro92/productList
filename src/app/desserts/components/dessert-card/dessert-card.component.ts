import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DessertResponse } from '../../interfaces/dessert.interface';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'dessert-card',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './dessert-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertCardComponent {
  shopService = inject(ShopService);
  dessert = input.required<DessertResponse>();

  isInCart = computed(() => {
  return this.shopService.shop()
    .some(item => item.name === this.dessert().name);
});

  imageUrl() {
    return this.dessert().image.desktop;
  }

  onSend(dessert: DessertResponse) {
    this.shopService.addShop(dessert);
  }

  onRemove(dessert: DessertResponse) {
    this.shopService.lessShop(dessert);
  }

  quantity = computed(() => {
    const found = this.shopService
      .shop()
      .find((item) => item.name === this.dessert().name);
    return found ? found.quantity : 0;
  });
}
