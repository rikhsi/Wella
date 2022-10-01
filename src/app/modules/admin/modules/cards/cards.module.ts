import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngZorroModules
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

//clibBoardModule
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzUploadModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzAlertModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzTypographyModule,
    ClipboardModule,
    NzImageModule,
    NzDropDownModule
  ]
})
export class CardsModule { }
