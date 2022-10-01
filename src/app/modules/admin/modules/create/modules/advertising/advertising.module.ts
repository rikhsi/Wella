import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisingComponent } from './advertising.component';

//formsModules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//translateModule
import { TranslateModule } from '@ngx-translate/core';

//ngZorroModules
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    TranslateModule,
    NzSelectModule,
    NzUploadModule,
    NzModalModule,
    NzIconModule
  ]
})
export class AdvertisingModule { }
