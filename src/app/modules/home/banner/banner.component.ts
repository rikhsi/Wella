import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Advertisement } from 'src/app/models/banner';
import { BannersService } from 'src/app/services/api/banners.service';
import SwiperCore, { EffectFade, Navigation, Pagination, SwiperOptions, Autoplay, Virtual } from "swiper";
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class BannerComponent implements OnInit, OnDestroy {
  getSub!: Subscription;
  fallback = '../../../assets/img/loading.jpg';

  banners!: Advertisement[];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'fade',
    grabCursor: true,
    autoplay: {
      delay: 4000
    },
    pagination: {
      el: '.banner__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    }
  };

  constructor(private bannersService: BannersService) {
    SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination, Virtual]);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(500);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(500);
  }

  ngOnInit(): void {
    this.getSub = this.bannersService.getTrue().subscribe({
      next: data => {
        this.banners = data;
      }
    })
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe();
  }
}
