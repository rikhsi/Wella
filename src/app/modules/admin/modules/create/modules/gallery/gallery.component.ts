import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/api/auth.service';
import { GalleryService } from 'src/app/services/api/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  providers: [NzMessageService]
})
export class GalleryComponent implements OnInit, OnDestroy {
  addSub!: Subscription;
  newGallery!: FormGroup;
  photoList: NzUploadFile[] = [];
  loading = false;
  uploading = false;

  constructor(private fb: FormBuilder, private msg: NzMessageService, private galleryService: GalleryService, private auth: AuthService, private router: Router) {
    this.newGallery = this.fb.group({
      title: [null, [Validators.required]],
      isActive: [false]
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.photoList = this.photoList.concat(file);
    return false;
  };

  reset(e: MouseEvent): void {
    e.preventDefault();
    this.newGallery.reset();
    this.photoList = []
    for (const key in this.newGallery.controls) {
      if (this.newGallery.controls.hasOwnProperty(key)) {
        this.newGallery.controls[key].markAsPristine();
        this.newGallery.controls[key].updateValueAndValidity();
      }
    }
  }

  submit(): void {
    if (this.photoList.length < 5) {
      this.msg.error('Выберите фото, максимум и минимум 5 фото');
    } else {
      if (this.newGallery.valid && this.photoList.length === 5) {
        this.loading = !this.loading;
        const formData = new FormData();
        this.photoList.forEach((file: any) => {
          formData.append('file', file);
        });
        formData.append('data', JSON.stringify(this.newGallery.value))
        this.addSub = this.galleryService.add(formData).subscribe({
          next: () => {
            this.photoList = [];
            this.newGallery.reset();
            this.loading = !this.loading;
            this.msg.success('Галерея успешно создана');
          },
          error: () => {
            this.loading = !this.loading;
            this.auth.removeToken();
            this.router.navigate(['/login'])
            this.msg.error('Не удалось создать галерею');
          }
        })
      } else {
        Object.values(this.newGallery.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.addSub) this.addSub.unsubscribe();
  }
}
