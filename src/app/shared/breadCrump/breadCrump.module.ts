import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { BreadCrumpComponent } from './breadCrump.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';

//translateModule
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BreadCrumpComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule
  ],
  exports: [
    BreadCrumpComponent
  ]
})
export class BreadCrumpModule { }
