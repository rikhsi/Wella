import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HandleLangService } from 'src/app/services/handle-lang.service';
import SwiperCore, { Autoplay, FreeMode, Mousewheel, Navigation, SwiperOptions, Thumbs } from "swiper";
import { SwiperComponent } from 'swiper/angular';
import { NzImageService } from 'ng-zorro-antd/image';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less'],
  providers: [NzImageService]
})

export class DescriptionComponent implements OnInit,AfterViewChecked {
  fallback = '../../../../assets/img/loading.jpg';
  thumbsSwiper = null;
  isVisible: boolean = false;
  isAlertVisible: boolean = false;
  currentLang: boolean = true;
  id: string = 'https://wellabridal.uz' + this.router.routerState.snapshot.url
  @Input() product!: Product;

  configBig: SwiperOptions = {
    spaceBetween: 10,
    grabCursor: true,
  };

  configSmall: SwiperOptions = {
    slidesPerView: 'auto',
    touchEventsTarget: 'container',
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

  constructor(private router: Router, private handleLang: HandleLangService,private nzImageService: NzImageService, private title: Title) {
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

  preview():void{
    const images:any[] = []
    this.product.photos.map(item => {
      images.push({
        src: item,
        width: 'auto',
        height: '60%',
      })
    })
    this.nzImageService.preview(images);
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

  ngAfterViewChecked(): void {
    this.handleLang.message.subscribe(data => {
      if(data){
        this.title.setTitle(`${this.product?.description}`)
      } else{
        this.title.setTitle(`${this.product?.description_uz}`)
      }
    })
  }
}
