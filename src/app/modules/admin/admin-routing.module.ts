import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'banner',
        loadChildren: () => import('./modules/banner/banner.module').then(m => m.BannerModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./modules/cards/cards.module').then(m => m.CardsModule)
      },
      {
        path: 'partners',
        loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule)
      },
      {
        path: 'filters',
        loadChildren: () => import('./modules/filters/filters.module').then(m => m.FiltersModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./modules/create/create.module').then(m => m.CreateModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
