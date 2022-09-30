import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AdminService } from 'src/app/services/admin.service';
import { Advertisement } from 'src/app/models/banner';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GalleryService } from 'src/app/services/api/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  providers: [NzMessageService]
})
export class GalleryComponent implements OnInit, OnDestroy {
  getSub!: Subscription;
  getActuveSub!: Subscription;
  deleteSub!: Subscription;
  putSub!: Subscription;
  allBanners: Advertisement[] = [];
  activeBanners: Advertisement[] = [];
  showRows = false;
  tableLoading: boolean = false;
  fallback = '../../../assets/img/loading.jpg';
  tabsIndex: number = 1;
  setOfChecked = new Set<number>();
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService, private adminService: AdminService, private galleryService: GalleryService, private msg: NzMessageService) { }

  //checkbox
  isChecked(id: number, checked: boolean): void {
    if (checked) {
      this.setOfChecked.add(id);
    } else if (!checked) {
      this.setOfChecked.delete(id);
    }
  }

  showCheckbox(): void {
    this.showRows = !this.showRows;
    this.setOfChecked.clear();
  }
  //-------------------------

  //modal
  showConfirm(id: number): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Хотите удалить баннер?',
      nzContent: 'Нажимая ОК, вы полностью удалите созданный вами баннер',
      nzCancelText: 'Отменить',
      nzCentered: true,
      nzClosable: false,
      nzAutofocus: null,
      nzOnOk: () => {
        this.deleteBanner(id);
      }
    });
  }
  ///--------------------------------------------

  //Tabs
  tabsControle(id: number) {
    this.tabsIndex = id
  }
  //----------------

  //get
  getBanners(): void {
    this.tableLoading = true;
    this.getSub = this.galleryService.get().subscribe({
      next: data => {
        this.allBanners = data;
        this.tableLoading = false;
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось загрузить');
      }
    })
  }
  //////////////////////////////////////

  //getActive
  getActiveBanners(): void {
    this.galleryService.getTrue().subscribe({
      next: (data) => {
        this.activeBanners = data;
        this.tableLoading = false;
      },
      error: () => {
        this.tableLoading = false;
      }
    })
  }
  /////////////////////////////////////

  //delete
  deleteBanner(id: number): void {
    this.tableLoading = true;
    this.deleteSub = this.galleryService.delete(id).subscribe({
      next: () => {
        this.allBanners = this.allBanners.filter(d => d.id !== id);
        this.tableLoading = false;
        this.msg.success(' Успешно удалено');
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось удалить');
      }
    })
  }

  isActive(isActive: boolean, id: number): void {
    if (isActive) {
      this.msg.error('Невозможно удалить, баннер активный')
    } else {
      this.showConfirm(id)
    }
  }
  ///--------------------------------

  //put
  setActiveBanner(): void {
    const listOfId: number[] = [];
    this.setOfChecked.forEach(data => {
      listOfId.push(data);
    })
    this.galleryService.update(listOfId).subscribe({
      next: () => {
        this.getBanners();
        this.getActiveBanners();
        this.showCheckbox();
        this.tableLoading = false;
        this.msg.success(' Успешно назначен');
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось назначить');
      }
    })
  }
  //////////////////////////

  ngOnInit(): void {
    setTimeout(() => {
      this.adminService.changePage(1)
    }, 10);
    this.getBanners();
    this.getActiveBanners();
  }

  ngOnDestroy(): void {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.deleteSub) this.deleteSub.unsubscribe();
    if (this.putSub) this.putSub.unsubscribe();
    if (this.getActuveSub) this.getActuveSub.unsubscribe();
  }

}
