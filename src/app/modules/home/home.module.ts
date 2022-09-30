import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home.component';
import { PartnersComponent } from './partners/partners.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { CollectionComponent } from './collection/collection.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

//swiperModule
import { SwiperModule } from 'swiper/angular';

//sharedModules
import { AlertModule } from 'src/app/shared/alert/alert.module';
import { ProductModule } from 'src/app/shared/product/product.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
//formModuleAngular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngxMaskModule
import { NgxMaskModule } from 'ngx-mask';

//translateModule
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    PartnersComponent,
    FormComponent,
    AboutComponent,
    BestsellersComponent,
    CollectionComponent,
    IntroductionComponent,
    BannerComponent,
    GalleryComponent,

  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    SwiperModule,
    ProductModule,
    AlertModule,
    MediaModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskModule,
    NzSkeletonModule
  ]
})
export class HomeModule { }
