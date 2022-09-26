import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { CatalogComponent } from './catalog.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
//swiperModule
import { SwiperModule } from 'swiper/angular';

//sharedModule
import { BreadCrumpModule } from 'src/app/shared/breadCrump/breadCrump.module';
import { ProductModule } from 'src/app/shared/product/product.module';

//translateModule
import { TranslateModule } from '@ngx-translate/core';

//routing
import { CatalogRoutingModule } from './catalog-routing.module';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    CatalogComponent,
    FiltersComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    NzGridModule,
    SwiperModule,
    ProductModule,
    BreadCrumpModule,
    TranslateModule,
    NzListModule,
    NzCardModule,
    NzSkeletonModule,
    ScrollingModule,
    NzButtonModule
  ]
})

export class CatalogModule { }
