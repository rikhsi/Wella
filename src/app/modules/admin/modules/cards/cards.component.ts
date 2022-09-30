import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AdminService } from 'src/app/services/admin.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/api/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
  providers: [NzMessageService]
})
export class CardsComponent implements OnInit, OnDestroy {
  getSub!: Subscription;
  deleteSub!: Subscription;
  putSub!: Subscription;
  getCollectionSub!: Subscription;
  allCards: Product[] = [];
  newCollection: Product[] = [];
  bestsellers: Product[] = [];
  setOfCollection = new Set<number>();
  setOfBestsellers = new Set<number>();
  tabsIndex: number = 1;
  copy!: string;
  fallback = '../../../assets/img/loading.jpg';
  isVisible = false;
  showTableRows = false;
  tableLoading = false;
  confirmModal?: NzModalRef;

  constructor(private modal: NzModalService, private adminService: AdminService, private msg: NzMessageService, private productsService: ProductsService) { }

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
        this.deleteProduct(id);
      }
    });
  }

  showModal(id: number): void {
    this.isVisible = true;
    this.copy = `http://wellabridal.uz/card/${id}`
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  ///--------------------------------------------

  //Tabs
  tabsControle(id: number) {
    this.tabsIndex = id
  }
  //----------------

  //checked
  isCollectionChecked(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCollection.add(id);
    } else if (!checked) {
      this.setOfCollection.delete(id);
    }
  }

  isBestsellersChecked(id: number, checked: boolean) {
    if (checked) {
      this.setOfBestsellers.add(id);
    } else if (!checked) {
      this.setOfBestsellers.delete(id);
    }
  }

  showCheckbox(): void {
    this.showTableRows = !this.showTableRows;
    this.setOfCollection.clear();
    this.setOfBestsellers.clear();
  }
  //-------------------------

  //get
  getProducts(): void {
    this.tableLoading = true;
    this.getSub = this.productsService.get().subscribe({
      next: data => {
        this.allCards = data;
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось загрузить');
      }
    })
  }
  //////////////////////////////////////

  //getActiveCollections
  getActiveCollections() {
    this.productsService.getCollection().subscribe({
      next: (data) => {
        this.newCollection = data;
        this.tableLoading = false;
      },
      error: () => {
        this.tableLoading = false;
      }
    })
  }
  ////////////////

  //getActiveBestsellers
  getActiveBestsellers() {
    this.productsService.getBestseller().subscribe({
      next: (data) => {
        this.bestsellers = data;
        this.tableLoading = false;
      },
      error: () => {
        this.tableLoading = false;
      }
    })
  }
  ////////////////

  //delete
  deleteProduct(id: number): void {
    this.tableLoading = true;
    this.deleteSub = this.productsService.delete(id).subscribe({
      next: data => {
        console.log(data);
        this.allCards = this.allCards.filter(d => d.id !== id);
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

  isActive(collection: boolean, bestseller: boolean, id: number): void {
    if (collection || bestseller) {
      this.msg.error('Невозможно удалить, продукт активный')
    } else {
      this.showConfirm(id)
    }
  }
  ///--------------------------------

  //put
  setNewCollection(): void {
    const listOfId: number[] = [];
    this.setOfCollection.forEach(data => {
      listOfId.push(data);
    })
    this.productsService.updateCollection(listOfId).subscribe({
      next: () => {
        this.tableLoading = false;
        this.setOfCollection.clear();
        this.msg.success(' Успешно назначен');
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось назначить');
      }
    })
  }

  setNewBestsellers(): void {
    const listOfId: number[] = [];
    this.setOfBestsellers.forEach(data => {
      listOfId.push(data);
    })
    this.productsService.updateBestseller(listOfId).subscribe({
      next: () => {
        this.tableLoading = false;
        this.setOfBestsellers.clear();
        this.msg.success(' Успешно назначен');
      },
      error: () => {
        this.tableLoading = false;
        this.msg.error('Не удалось назначить');
      }
    })
  }
  //////////////////////

  ngOnInit(): void {
    setTimeout(() => {
      this.adminService.changePage(3)
    }, 10);
    this.getProducts();
    this.getActiveCollections();
    this.getActiveBestsellers();
  }

  ngOnDestroy(): void {
    if (this.getSub) this.getSub.unsubscribe();
    if (this.deleteSub) this.deleteSub.unsubscribe();
    if (this.putSub) this.putSub.unsubscribe();
  }
}
