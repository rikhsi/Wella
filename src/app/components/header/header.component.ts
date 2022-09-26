import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'ru';
  isCatalogPage: boolean = false;
  @Output() showLoading = new EventEmitter();

  constructor(public translate: TranslateService, private router: Router, private navigation: NavigationService) { }

  navigateRoute(): void {
    this.router.navigate(['/']);
  }

  catalogRoute(): void {
    if (this.isCatalogPage === false) {
      this.router.navigate(['/catalog'])
      this.isCatalogPage = !this.isCatalogPage
    } else {
      this.router.navigate([''])
      this.isCatalogPage = !this.isCatalogPage
    }
  }

  headerRoute(): void {
    this.isCatalogPage = false;
    this.router.navigate(['']);
  }

  language(data: string): void {
    this.currentLanguage = data;
    this.showLoading.emit();
    this.translate.use(data);
  }

  ngOnInit(): void {
    this.navigation.isHomePage.subscribe((data) => {
      this.isCatalogPage = data;
    })
  }
}
