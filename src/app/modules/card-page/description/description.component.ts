import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HandleLangService } from 'src/app/services/handle-lang.service';
import SwiperCore, { Autoplay, FreeMode, Mousewheel, Navigation, SwiperOptions, Thumbs } from "swiper";
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})

export class DescriptionComponent implements OnInit {
  fallback = '../../../../assets/img/loading.jpg';
  thumbsSwiper = null;
  isVisible: boolean = false;
  isAlertVisible: boolean = false;
  currentLang: boolean = true;
  @Input() product!: Product;

  configBig: SwiperOptions = {
    spaceBetween: 10,
    grabCursor: true,
  };

  configSmall: SwiperOptions = {
    slidesPerView: 'auto',
    autoplay: {
      delay: 8000
    },
    freeMode: true,
    grabCursor: true,
    mousewheel: true,
    watchSlidesProgress: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        direction: 'horizontal',
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 4.5,
        direction: 'horizontal',
        spaceBetween: 12,
      },
      850: {
        slidesPerView: 4.4,
        direction: 'vertical'
      },
      768: {
        slidesPerView: 5,
        direction: 'vertical'
      },
      575: {
        slidesPerView: 4.2,
        spaceBetween: 12,
        direction: 'vertical'
      },
      360: {
        slidesPerView: 5,
        spaceBetween: 12,
        direction: 'horizontal',
      }
    }
  };

  constructor(private router: Router, private handleLang: HandleLangService) {
    SwiperCore.use([Mousewheel, FreeMode, Navigation, Thumbs, Autoplay]);
  }

  routerNavigate(): void {
    this.router.navigate(['/']);
  }

  showModal(): void {
    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, 300);
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible;
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev() {
    this.swiper?.swiperRef.slidePrev(500);
  }
  swipeNext() {
    this.swiper?.swiperRef.slideNext(500);
  }

  ngOnInit(): void {
    this.handleLang.message.subscribe(data => {
      this.currentLang = data;
    })
  }
}
