import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  /**
   * Input property that provides the product details to be displayed in the card.
   *
   * @remarks
   * The product information is used to render the brand, name, price,
   * and product image inside the card layout.
   *
   * @example
   * ```ts
   * <app-product-card [productInfo]="{
   *   brand: 'Nike',
   *   name: 'Air Max 270',
   *   price: '$150',
   *   imageUrl: 'assets/images/airmax.png'
   * }"></app-product-card>
   * ```
   */
  productInfo = input.required<Product>();
}
