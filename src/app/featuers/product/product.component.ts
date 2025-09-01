import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { Product } from '../../shared/models/product.model';
import {
  Tab,
  TabbedContentComponent,
} from '../../shared/tabbed-content/tabbed-content.component';

import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { Accordion } from '../../shared/models/accordion.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ButtonComponent,
    ProductCardComponent,
    TabbedContentComponent,
    ReactiveFormsModule,
    AccordionComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  /**
   * The product displayed on the page.
   *
   * @remarks
   * Includes brand, name, price, and image URL.
   */
  product: Product = {
    name: 'محلول پاک کننده اوی هیدرا',
    brand: 'Lidoma',
    price: '۳۰۰,۰۰۰ تومان',
    imageUrl: 'p.png',
  };

  /**
   * Accordion items for additional product details and reviews.
   *
   * @remarks
   * Each item is rendered using the {@link AccordionComponent}.
   */
  accordionItems: Accordion[] = [
    {
      title: 'توضیحات تکمیلی محصول',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      icon: 'icon-description',
    },
    {
      title: 'نظرات',
      content: 'هنوز نظری ثبت نشده است',
      icon: 'icon-comment',
    },
  ];

  /**
   * Reactive form for managing product quantity input.
   */
  form: FormGroup;

  /**
   * The maximum available stock for this product.
   */
  productQuantity: number = 10;

  /**
   * Signal that tracks the remaining stock after quantity selection.
   *
   * @default productQuantity
   */
  remainingStock = signal<number>(this.productQuantity);

  /**
   * Signal that indicates if the maximum stock has been reached.
   */
  maxStockReached = signal<boolean>(false);

  /**
   * Signal indicating whether the product has been added to the cart.
   *
   * @default false
   */
  notInCart = signal<boolean>(false);

  /**
   * Tabs containing structured product information (description, reviews, etc.).
   */
  tabs: Tab[] = [
    {
      title: 'توضیحات تکمیلی محصول',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      icon: 'icon-description',
    },
    {
      title: 'نظرات',
      content: 'هنوز نظری ثبت نشده است',
      icon: 'icon-comment',
    },
  ];

  constructor() {
    this.form = new FormGroup({
      shoppingCardInput: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.min(0), Validators.max(this.productQuantity)],
      }),
    });
  }

  /**
   * Decreases the product quantity in the form by one,
   * if the current value is greater than zero.
   *
   * @remarks
   * - Updates the remaining stock.
   * - Resets the max stock flag if it was previously reached.
   */
  onMinusBtnClicked() {
    const control = this.form.get('shoppingCardInput');
    if (control) {
      const currentValue = control.value ?? 0;
      if (currentValue > 0) {
        control.setValue(currentValue - 1);
        this.remainingStock.update((stock) => stock + 1);
        this.maxStockReached.set(false);
      }
    }
  }

  /**
   * Increases the product quantity in the form by one,
   * if it does not exceed the available stock.
   *
   * @remarks
   * - Updates the remaining stock.
   * - Sets the max stock flag when the product quantity limit is reached.
   */
  onPlusBtnClicked() {
    const control = this.form.get('shoppingCardInput');
    if (control) {
      const currentValue = control.value ?? 0;
      if (currentValue < this.productQuantity) {
        control.setValue(currentValue + 1);
        this.remainingStock.update((stock) => stock - 1);
        if (currentValue + 1 === this.productQuantity) {
          this.maxStockReached.set(true);
        }
      }
    }
  }

  /**
   * Toggles the product's cart status between added and not added.
   *
   * @remarks
   * Used to change the button state and display accordingly.
   */
  onAddProductToCart() {
    this.notInCart.set(!this.notInCart());
  }
}
