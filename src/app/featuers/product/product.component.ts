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
  MaxValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { sign } from 'crypto';
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
  product: Product = {
    name: 'محلول پاک کننده اوی هیدرا',
    brand: 'Lidoma',
    price: '۳۰۰,۰۰۰ تومان',
    imageUrl: 'p.png',
  };

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

  form: FormGroup;

  productQuantity: number = 10;
  remainingStock = signal<number>(this.productQuantity);
  maxStockReached = signal<boolean>(false);

  constructor() {
    this.form = new FormGroup({
      shoppingCardInput: new FormControl<number>(0, {
        nonNullable: true,
        validators: [Validators.min(0), Validators.max(this.productQuantity)],
      }),
    });
  }

  notInCart = signal<boolean>(false);

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

  onMinusBtnClicked() {
    const control = this.form.get('shoppingCardInput');
    if (control) {
      const currentValue = control.value ?? 0; // default to 0 if null
      if (currentValue > 0) {
        control.setValue(currentValue - 1);
        this.remainingStock.update((stock) => stock + 1);
        this.maxStockReached.set(false);
      }
    }
  }

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

  onAddProductToCart() {
    this.notInCart.set(!this.notInCart());
  }
}
