import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { ProductResolver } from './services/api/product.resolver';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "card/:id",
    resolve: { data: ProductResolver },
    loadChildren: () => import('./modules/card-page/card-page.module').then(m => m.CardPageModule),
  },
  {
    path: "catalog",
    loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: "admin",
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: "login",
    loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule),
  },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
