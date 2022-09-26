import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { AdminService } from 'src/app/services/admin.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

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
      isShow: false,
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
  ]

  constructor(private router: Router, private main: MainService, private adminService: AdminService, private modal: NzModalService,) { }

  navigateToPage(route: string): void {
    this.router.navigate([route])
  }

  subscirbeToActivePage(): void {
    this.adminService.id.subscribe((id) => {
      this.pages.map((item) => {
        if (item.id === id) {
          item.isShow = true
        } else {
          item.isShow = false
        }
      })
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
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit(): void {
    this.router.navigate(['admin/banner'])
    this.subscirbeToActivePage();
    setTimeout(() => {
      this.main.setPage(false);
    }, 10);
  }
}
