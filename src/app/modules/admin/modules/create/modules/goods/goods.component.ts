import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/models/filter';
import { AuthService } from 'src/app/services/api/auth.service';
import { CategoriesService } from 'src/app/services/api/categories.service';
import { ProductsService } from 'src/app/services/api/products.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.less'],
  providers: [NzMessageService]
})

export class GoodsComponent implements OnInit, OnDestroy {
  addSub!: Subscription;
  getSub!: Subscription;
  newGood!: FormGroup;
  uploading = false;
  photoList: NzUploadFile[] = [];
  categories!: Filter[];

  constructor(private fb: FormBuilder, private msg: NzMessageService, private productsService: ProductsService, private categoriesService: CategoriesService, private auth: AuthService, private router: Router) {
    this.newGood = this.fb.group({
      title: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      country: [null, [Validators.required]],
      size: [null, [Validators.required]],
      color: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      category: [null, [Validators.required]],
      available: [null, [Validators.required]],
      isBestSeller: [false],
      isCollection: [false],
      categories_id: [null]
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.photoList = this.photoList.concat(file);
    return false;
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.photoList = [];
    this.newGood.reset();
    for (const key in this.newGood.controls) {
      if (this.newGood.controls.hasOwnProperty(key)) {
        this.newGood.controls[key].markAsPristine();
        this.newGood.controls[key].updateValueAndValidity();
      }
    }
  }

  productsSubmit(): void {
    if (this.photoList.length === 0) {
      this.msg.error('Выберите фото, максимум 10 фото');
    }
    if (this.newGood.valid && this.photoList.length > 0) {
      this.uploading = true;
      const formData = new FormData();
      this.setCategory();
      this.photoList.forEach((file: any) => {
        formData.append('file', file);
      });
      formData.append('data', JSON.stringify(this.newGood.value))
      this.addSub = this.productsService.add(formData).subscribe({
        next: () => {
          this.uploading = false;
          this.photoList = [];
          this.newGood.reset();
          this.msg.success('Товар успешно создан');
        },
        error: () => {
          this.auth.removeToken();
          this.router.navigate(['/login'])
          this.msg.error('Не удалось создать товар');
        }
      })
    } else {
      Object.values(this.newGood.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getCategories(): void {
    this.getSub = this.categoriesService.getCategory().subscribe({
      next: data => {
        this.categories = data;
      },
      error: () => {
        this.msg.error(' Не удалось обновить список категорий');
      }
    })
  }

  setCategory(): void {
    let setId: number[] = [];
    let categories: string[] = this.newGood.controls['category'].value;
    this.categories.find(category => {
      categories.map(item => {
        if (category.title === item) {
          setId.push(category.id)
        }
      })
    })
    this.newGood.patchValue({
      categories_id: setId
    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    if (this.addSub) this.addSub.unsubscribe();
    if (this.getSub) this.getSub.unsubscribe();
  }
}
