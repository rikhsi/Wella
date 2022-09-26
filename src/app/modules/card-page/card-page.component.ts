import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private activeRoute: ActivatedRoute, private navigation: NavigationService, private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.navigation.changeMessage(this.pages);
    setTimeout(() => {
      this.navigation.changeRoute(false);
    }, 10);
    this.activeRoute.params.subscribe((params: Params) => this.myParam = params['id']);
    this.productsService.getDress(this.myParam).subscribe({
      next: data => {
        this.product = data;
      }
    })
    this.categoriesService.getSingle(6).subscribe({
      next: data => {
        this.products = data.dresses
      }
    })
  }
}
