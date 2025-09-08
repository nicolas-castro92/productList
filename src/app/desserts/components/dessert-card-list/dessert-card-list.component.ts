import {
  ChangeDetectionStrategy,
  Component,
  input,

} from '@angular/core';
import { DessertResponse } from '../../interfaces/dessert.interface';
import { DessertCardComponent } from '../dessert-card/dessert-card.component';

@Component({
  selector: 'dessert-card-list',
  imports: [DessertCardComponent],
  templateUrl: './dessert-card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DessertCardListComponent {

  _dessertList = input.required<DessertResponse[]>()
}
