import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { SameProductsComponent } from './same-products/same-products.component';
import { CardPageComponent } from './card-page.component';
import { DescriptionComponent } from './description/description.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpinModule } from 'ng-zorro-antd/spin';

//swiperModule
import { SwiperModule } from 'swiper/angular';

//sharedModule
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { AlertModule } from 'src/app/shared/alert/alert.module';
import { BreadCrumpModule } from 'src/app/shared/breadCrump/breadCrump.module';
import { ProductModule } from 'src/app/shared/product/product.module';

//translateModule
import { TranslateModule } from '@ngx-translate/core';

//routing
import { CardPageRoutingModule } from './card-page-routing.module';


@NgModule({
  declarations: [
    SameProductsComponent,
    CardPageComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    CardPageRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzImageModule,
    SwiperModule,
    ProductModule,
    ModalModule,
    AlertModule,
    BreadCrumpModule,
    TranslateModule,
    NzSpinModule
  ]
})

export class CardPageModule { }
