import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AdminService } from 'src/app/services/admin.service';
import { Advertisement } from 'src/app/models/banner';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { PartnersService } from 'src/app/services/api/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less'],
  providers: [NzMessageService]
})
export class PartnersComponent implements OnInit, OnDestroy {
  getSub!: Subscription;
  deleteSub!: Subscription;
  partners: Advertisement[] = [];
  fallback = '../../../assets/img/loading.jpg';
  tableLoading: boolean = false;
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService, private adminService: AdminService, private msg: NzMessageService, private partnersService: PartnersService) { }

  //get
  getPartners(): void {
    this.tableLoading = true;
    this.getSub = this.partnersService.get().subscribe({
      next: data => {
        this.partners = data;
        this.tableLoading = false;
      },
      error: error => {
        console.error('There was an error!', error);
        this.tableLoading = false;
        this.msg.error('Не удалось загрузить');
      }
    })
  }
  //////////////////////////////////////

  //delete
  deletePartner(id: number): void {
    this.tableLoading = true;
    this.deleteSub = this.partnersService.delete(id).subscribe({
      next: data => {
        console.log(data);
        this.partners = this.partners.filter(d => d.id !== id);
        this.tableLoading = false;
        this.msg.success(' Успешно удалено');
      },
      error: error => {
        console.error('There was an error!', error);
        this.tableLoading = false;
        this.msg.error('Не удалось удалить');
      }
    })
  }
  ///--------------------------------

  //modal
  showConfirm(id: number): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Хотите удалить партнёра?',
      nzContent: 'Нажимая ОК, вы полностью удалите созданный вами партнёр',
      nzCancelText: 'Отменить',
      nzCentered: true,
      nzClosable: false,
      nzAutofocus: null,
      nzOnOk: () => {
        this.deletePartner(id);
      }
    });
  }
  ///--------------------------------------------

  ngOnInit(): void {
    setTimeout(() => {
      this.adminService.changePage(2)
    }, 10);
    this.getPartners();
  }

  ngOnDestroy(): void {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.deleteSub) this.deleteSub.unsubscribe();
  }
}
