import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  fallback = null;

  @Input() product!: Product;

  constructor(private router: Router) { }

  routerNavigate(): void {
    setTimeout(() => {
      this.router.navigate(['card/', this.product.id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  ngOnInit(): void {
  }

}
