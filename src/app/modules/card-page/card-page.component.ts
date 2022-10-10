import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { BreadCrumb } from 'src/app/models/breadCrumb';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/api/products.service';
import { CategoriesService } from 'src/app/services/api/categories.service';
import { HandleLangService } from 'src/app/services/handle-lang.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.less']
})
export class CardPageComponent implements OnInit, OnDestroy {
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
  isLoading: boolean = false;

  constructor(
    private activedRoute: ActivatedRoute, 
    private navigation: NavigationService, 
    private productsService: ProductsService, 
    private categoriesService: CategoriesService, 
    private langService: HandleLangService,
    private router: Router,
    private meta: Meta,
    private title: Title,
  ) { }

  getGood(): void {
    this.isLoading = !this.isLoading;
    this.activedRoute.params.subscribe((params: Params) => this.myParam = params['id']);
    this.productsService.getDress(this.myParam).subscribe({
      next: data => {
        if (data.categories) {
          this.product = data;
          this.meta.addTag( 
            {
              name: 'description' , content: data.description 
            })
          this.categoriesService.getSingle(data?.categories[0].id).subscribe({
            next: data => {
              if (data.dresses.length === 0) {
                this.noSame = false;
                this.isLoading = !this.isLoading;
              } else {
                this.products = data.dresses.filter(d => d.id !== +this.myParam)
                this.noSame = true;
                this.isLoading = !this.isLoading;
              }
            },
            error: () => {
              this.noSame = false;
              this.isLoading = !this.isLoading;
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
    this.langService.message.subscribe(data => {
      if(data){
        this.title.setTitle('Wella Wedding - страница товара')
      } else{
        this.title.setTitle('Wella Wedding - mahsulot sahifasi')
      }
    })
  }

  
  ngOnDestroy(): void {
    this.meta.removeTag("name='description'")
  }
}
