import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Advertisement } from 'src/app/models/banner';
import { PartnersService } from 'src/app/services/api/partners.service';
import SwiperCore, { Autoplay } from "swiper";
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit, OnDestroy {
  getSub!: Subscription;

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoplay: {
      delay: 1000
    },
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 95
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 95
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 50
      },
      575: {
        slidesPerView: 4,
        spaceBetween: 70
      },
      360: {
        slidesPerView: 3,
        spaceBetween: 70
      }
    }
  };

  partners!: Advertisement[];

  constructor(private partnersService: PartnersService) {
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    this.getSub = this.partnersService.get().subscribe({
      next: data => {
        this.partners = data;
      }
    })
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe();
  }
}
