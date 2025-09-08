import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertCardListComponent } from "./desserts/components/dessert-card-list/dessert-card-list.component";
import { DessertLayoutComponent } from "./desserts/pages/dessert-layout/dessert-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DessertCardListComponent, DessertLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productList';
}
