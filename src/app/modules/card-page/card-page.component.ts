import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { BreadCrumb } from 'src/app/models/breadCrumb';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/api/products.service';
import { CategoriesService } from 'src/app/services/api/categories.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.less']
})
export class CardPageComponent implements OnInit {
  products!: Product[];
  product!: Product;
  myParam!: number;
  noSame!: boolean;
  pages: BreadCrumb[] = [
    {
      id: 2,
      name: "breadCrump.catalog",
      route: "/catalog",
    },
    {
      id: 3,
      name: "breadCrump.cardPage",
      route: "/card/"
    }
  ]
  categoryId!: number;

  constructor(private activedRoute: ActivatedRoute, private navigation: NavigationService, private productsService: ProductsService, private categoriesService: CategoriesService, private router: Router) { }

  getGood(): void {
    this.activedRoute.params.subscribe((params: Params) => this.myParam = params['id']);
    this.productsService.getDress(this.myParam).subscribe({
      next: data => {
        if (data.categories) {
          this.product = data;
          this.categoriesService.getSingle(data?.categories[0].id).subscribe({
            next: data => {
              if (data.dresses.length === 0) {
                this.noSame = false;
              } else {
                this.products = data.dresses;
                this.noSame = true;
              }
            },
            error: () => {
              this.noSame = false;
            }
          })
        } else {
          this.router.navigate(['/home'])
        }
      },
      error: () => {
        this.router.navigate(['/home'])
      }
    })
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.navigation.changeMessage(this.pages);
    setTimeout(() => {
      this.navigation.changeRoute(false);
    }, 10);
    this.getGood();
  }
}
