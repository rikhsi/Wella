import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersRoutingModule } from './filters-routing.module';
import { FiltersComponent } from './filters.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FiltersRoutingModule,
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
  ]
})
export class FiltersModule { }
