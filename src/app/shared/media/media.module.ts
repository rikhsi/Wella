import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MediaComponent } from './media.component';

//ngZorroModule
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    NzGridModule
  ],
  exports: [
    MediaComponent
  ]
})
export class MediaModule { }
