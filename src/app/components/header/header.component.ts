import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HandleLangService } from 'src/app/services/handle-lang.service';
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

  constructor(public translate: TranslateService, private router: Router, private navigation: NavigationService, private handleLang: HandleLangService) { }

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
    if (this.currentLanguage === 'uz') {
      this.handleLang.changeMessage(false)
    } else {
      this.handleLang.changeMessage(true);
    }
  }

  ngOnInit(): void {
    this.navigation.isHomePage.subscribe((data) => {
      this.isCatalogPage = data;
    })
  }
}
