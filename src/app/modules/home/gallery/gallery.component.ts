import { Component, OnInit, ViewChild } from '@angular/core';
import { Advertisement } from 'src/app/models/banner';
import { Product } from 'src/app/models/product';
import { GalleryService } from 'src/app/services/api/gallery.service';
import SwiperCore, { EffectFade, Navigation, SwiperOptions, Pagination, Autoplay, Virtual } from "swiper";
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  fallback = null;

  galleryList!: Advertisement[];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    autoplay: {
      delay: 8000,
    },
    effect: 'fade',
    grabCursor: true,
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    }
  };

  constructor(private galleryService: GalleryService) {
    SwiperCore.use([Autoplay, EffectFade, Navigation, Virtual, Pagination]);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(500);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(500);
  }

  ngOnInit(): void {
    this.galleryService.getTrue().subscribe({
      next: data => {
        this.galleryList = data
      }
    })
  }
}
