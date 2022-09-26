import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { SwiperOptions } from "swiper";

@Component({
  selector: 'app-same-products',
  templateUrl: './same-products.component.html',
  styleUrls: ['./same-products.component.less']
})
export class SameProductsComponent implements OnInit {

  @Input() products!: Product[];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
      1150: {
        slidesPerView: 3.6,
      },
      992: {
        slidesPerView: 3.2,
      },
      930: {
        slidesPerView: 2.8,
      },
      850: {
        slidesPerView: 2.6,
      },
      768: {
        slidesPerView: 2.3,
      },
      700: {
        slidesPerView: 2.2,
      },
      650: {
        slidesPerView: 1.9,
      },
      575: {
        slidesPerView: 1.7,
      },
      500: {
        slidesPerView: 1.6,
      },
      450: {
        slidesPerView: 1.4,
      },
      380: {
        slidesPerView: 1.2,
      },
      360: {
        slidesPerView: 1.1,
      }
    }
  };

  constructor(private router: Router) { }

  navigate(): void {
    setTimeout(() => {
      this.router.navigate(['/catalog']);
    }, 700);
  }

  ngOnInit(): void {
  }
}
