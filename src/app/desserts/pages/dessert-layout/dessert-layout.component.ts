import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DessertCardListComponent } from "../../components/dessert-card-list/dessert-card-list.component";
import { DessertShopComponent } from "../../components/dessert-shop/dessert-shop.component";
import { DessertResponse } from '../../interfaces/dessert.interface';
import { DessertService } from '../../services/dessert.service';

@Component({
  selector: 'app-dessert-layout',
  imports: [DessertCardListComponent, DessertCardListComponent, DessertShopComponent],
  templateUrl: './dessert-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertLayoutComponent implements OnInit{

  ngOnInit(): void {
    this.dessertService
      .getDessertList()
      .subscribe((resp) => this._dessertList.set([...resp]));
  }

  private dessertService = inject(DessertService);
  _dessertList = signal<DessertResponse[]>([]);
 }
