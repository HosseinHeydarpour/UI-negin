import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
