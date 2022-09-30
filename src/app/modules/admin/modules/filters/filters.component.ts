import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AdminService } from 'src/app/services/admin.service';
import { Filter } from 'src/app/models/filter';
import { CategoriesService } from 'src/app/services/api/categories.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HandleLangService } from 'src/app/services/handle-lang.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  providers: [NzMessageService]
})
export class FiltersComponent implements OnInit, OnDestroy {
  delete!: Subscription;
  get!: Subscription;
  categories!: Filter[];
  currentLang: boolean = true;
  tableLoading: boolean = false;
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService, private adminService: AdminService, private categoriesService: CategoriesService, private msg: NzMessageService, private handleLang: HandleLangService) { }

  //get
  getCategories(): void {
    this.tableLoading = true;
    this.get = this.categoriesService.getCategory().subscribe({
      next: data => {
        this.categories = data;
        this.tableLoading = false;
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось обновить');
      }
    })
  }
  //////////////////////////////////////

  //delete
  deleteCategories(id: number): void {
    this.tableLoading = true;
    this.delete = this.categoriesService.deleteCategory(id).subscribe({
      next: () => {
        this.tableLoading = false;
        this.categories = this.categories.filter(d => d.id !== id);
        this.msg.success(' Успешно удалено');
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось удалить');
      }
    })
  }
  ///--------------------------------

  //modal
  showConfirm(id: number): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Хотите удалить категорию?',
      nzContent: 'Нажимая ОК, вы полностью удалите созданный вами категорию',
      nzCancelText: 'Отменить',
      nzCentered: true,
      nzClosable: false,
      nzAutofocus: null,
      nzOnOk: () => {
        this.deleteCategories(id);
      }
    });
  }
  ///--------------------------------------------

  ngOnInit(): void {
    setTimeout(() => {
      this.adminService.changePage(4)
    }, 10);
    this.getCategories();
    this.handleLang.message.subscribe(data => {
      this.currentLang = data
    })
  }

  ngOnDestroy(): void {
    if (this.get) this.get.unsubscribe();
    if (this.delete) this.delete.unsubscribe();
  }
}



