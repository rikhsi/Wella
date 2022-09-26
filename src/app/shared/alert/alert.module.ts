import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { AlertComponent } from './alert.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';

//translateModule
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzModalModule,
    TranslateModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
