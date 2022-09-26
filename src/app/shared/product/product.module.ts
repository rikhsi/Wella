import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { ProductComponent } from './product.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzTypographyModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
