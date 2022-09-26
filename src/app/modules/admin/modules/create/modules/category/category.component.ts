import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/services/api/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less'],
  providers: [NzMessageService]
})
export class CategoryComponent implements OnInit, OnDestroy {
  newFilter!: FormGroup;
  addSub!: Subscription;

  constructor(private fb: FormBuilder, private msg: NzMessageService, private categoriesService: CategoriesService) {
    this.newFilter = this.fb.group({
      title: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.newFilter.valid) {
      this.addSub = this.categoriesService.addCategory(this.newFilter.value).subscribe({
        next: () => {
          this.newFilter.reset();
          this.msg.success(' Успешно создан');
        },
        error: () => {
          this.msg.error('Не удалось загрузить');
        }
      })
    } else {
      Object.values(this.newFilter.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.newFilter.reset();
    for (const key in this.newFilter.controls) {
      if (this.newFilter.controls.hasOwnProperty(key)) {
        this.newFilter.controls[key].markAsPristine();
        this.newFilter.controls[key].updateValueAndValidity();
      }
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.addSub) this.addSub.unsubscribe();
  }
}
