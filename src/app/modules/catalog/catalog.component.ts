import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { BreadCrumb } from 'src/app/models/breadCrumb';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/api/products.service';
import { CategoriesService } from 'src/app/services/api/categories.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  products!: Product[];
  page: BreadCrumb[] = [
    {
      id: 2,
      name: "breadCrump.catalog",
      route: "/catalog",
    }
  ]

  constructor(private navigation: NavigationService, private productsService: ProductsService, private categoriesService: CategoriesService) {
  }

  handleProduct(id: number) {
    if (id === 0) {
      this.getAllProducts();
    } else {
      this.getCategoryProducts(id);
    }
  }

  getAllProducts(): void {
    this.productsService.get().subscribe({
      next: data => {
        this.products = data;
      }
    })
  }

  getCategoryProducts(id: number) {
    this.categoriesService.getSingle(id).subscribe({
      next: data => {
        this.products = data.dresses;
      }
    })
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.navigation.changeMessage(this.page);
    setTimeout(() => {
      this.navigation.changeRoute(true);
    }, 10);
    this.getAllProducts();
  }
}
