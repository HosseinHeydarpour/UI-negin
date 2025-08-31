import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { Product } from '../../shared/models/product.model';
import {
  Tab,
  TabbedContentComponent,
} from '../../shared/tabbed-content/tabbed-content.component';
import { title } from 'process';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, ProductCardComponent, TabbedContentComponent],
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
}
