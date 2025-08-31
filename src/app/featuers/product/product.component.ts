import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product: Product = {
    name: 'محلول پاک کننده اوی هیدرا',
    brand: 'Lidoma',
    price: '۳۰۰,۰۰۰ تومان',
    imageUrl: 'p.png',
  };
}
