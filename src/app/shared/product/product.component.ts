import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleLangService } from 'src/app/services/handle-lang.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  currentLang: boolean = true;
  fallback = '../../../assets/img/loading.jpg';

  @Input() product!: Product;

  constructor(private router: Router, private handleLang: HandleLangService) { }

  routerNavigate(): void {
    setTimeout(() => {
      this.router.navigate(['card/', this.product.id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  ngOnInit(): void {
    this.handleLang.message.subscribe(data => {
      this.currentLang = data
    })
  }

}
