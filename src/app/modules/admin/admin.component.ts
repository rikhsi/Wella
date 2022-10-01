import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/api/auth.service';
import { HandleLangService } from 'src/app/services/handle-lang.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  confirmModal?: NzModalRef;
  pages = [
    {
      id: 1,
      route: 'admin/banner',
      isShow: true,
      type: 'global',
      name: 'Баннер'
    },
    {
      id: 2,
      route: 'admin/partners',
      isShow: false,
      type: 'contacts',
      name: 'Партнёры'
    },
    {
      id: 3,
      route: 'admin/cards',
      isShow: false,
      type: 'book',
      name: 'Карточка товара'
    },
    {
      id: 4,
      route: 'admin/filters',
      isShow: false,
      type: 'sort-descending',
      name: 'Фильтры'
    },
    {
      id: 5,
      route: 'admin/gallery',
      isShow: false,
      type: 'area-chart',
      name: 'Галерея'
    },
  ]
  creates = [
    {
      id: 1,
      name: 'Создать товар',
      route: 'admin/create/goods',
      type: 'book',
      selected: false
    },
    {
      id: 2,
      name: 'Создать рекламу',
      route: 'admin/create/advertising',
      type: 'global',
      selected: false
    },
    {
      id: 3,
      name: 'Создать категорию',
      route: 'admin/create/category',
      type: 'sort-descending',
      selected: false
    },
    {
      id: 4,
      name: 'Создать галерею',
      route: 'admin/create/gallery',
      type: 'area-chart',
      selected: false
    }
  ]
  switchValue = true;
  constructor(private router: Router, private main: MainService, private modal: NzModalService, private auth: AuthService, private handleLang: HandleLangService) { }

  navigateToPage(route: string): void {
    this.creates.map((item) => {
      item.selected = false
    })
    this.router.navigate([route])
  }

  selectedNone(route: string) {
    this.router.navigate([route])
    this.pages.map((item) => {
      item.isShow = false
    })
  }

  tableShowConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Хотите выйти?',
      nzContent: 'Нажимая ОК, вам придется заново перезайти',
      nzCancelText: 'Отменить',
      nzCentered: true,
      nzClosable: false,
      nzAutofocus: null,
      nzOnOk: () => {
        this.auth.removeToken();
        this.router.navigate(['login'])
      }
    });
  }

  langSet() {
    this.switchValue = !this.switchValue
    this.handleLang.changeMessage(this.switchValue)
  }

  ngOnInit(): void {
    this.router.navigate(['admin/banner'])
    setTimeout(() => {
      this.main.setPage(false);
    }, 10);
  }
}
