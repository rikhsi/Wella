import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';

const routes: Routes = [
  {
    path: '', component: CreateComponent,
    children: [
      {
        path: 'goods',
        loadChildren: () => import('./modules/goods/goods.module').then(m => m.GoodsModule)
      },
      {
        path: 'advertising',
        loadChildren: () => import('./modules/advertising/advertising.module').then(m => m.AdvertisingModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
