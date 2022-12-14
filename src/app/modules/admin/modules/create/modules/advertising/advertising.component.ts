import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/api/auth.service';
import { BannersService } from 'src/app/services/api/banners.service';
import { PartnersService } from 'src/app/services/api/partners.service';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.less'],
  providers: [NzMessageService]
})
export class AdvertisingComponent implements OnInit, OnDestroy {
  addBannerSub!: Subscription;
  addPartnerSub!: Subscription;
  newBanner!: FormGroup;
  newPartner!: FormGroup;
  bannerPhotoList: NzUploadFile[] = [];
  partnerPhotoList: NzUploadFile[] = [];
  loadingBanner = false;
  loadingPartner = false;

  constructor(private fb: FormBuilder, private msg: NzMessageService, private bannerService: BannersService, private partnersService: PartnersService, private auth: AuthService, private router: Router) {
    this.newBanner = this.fb.group({
      title: [null, [Validators.required]],
      isActive: [false]
    });
    this.newPartner = this.fb.group({
      title: [null, [Validators.required]],
      isActive: [false]
    });
  }

  beforeBannerUpload = (file: NzUploadFile): boolean => {
    this.bannerPhotoList = this.bannerPhotoList.concat(file);
    return false;
  };

  beforPartnerUpload = (file: NzUploadFile): boolean => {
    this.partnerPhotoList = this.partnerPhotoList.concat(file);
    return false;
  };

  resetBanner(e: MouseEvent): void {
    e.preventDefault();
    this.newBanner.reset();
    this.bannerPhotoList = []
    for (const key in this.newBanner.controls) {
      if (this.newBanner.controls.hasOwnProperty(key)) {
        this.newBanner.controls[key].markAsPristine();
        this.newBanner.controls[key].updateValueAndValidity();
      }
    }
  }

  resetPartner(e: MouseEvent): void {
    e.preventDefault();
    this.newPartner.reset();
    this.partnerPhotoList = []
    for (const key in this.newBanner.controls) {
      if (this.newBanner.controls.hasOwnProperty(key)) {
        this.newPartner.controls[key].markAsPristine();
        this.newPartner.controls[key].updateValueAndValidity();
      }
    }
  }

  bannerSubmit(): void {
    if (this.bannerPhotoList.length === 0) {
      this.msg.error('???????????????? ????????, ???????????????? 1 ????????');
    } else {
      if (this.newBanner.valid) {
        this.loadingBanner = !this.loadingBanner;
        const formData = new FormData();
        this.bannerPhotoList.forEach((file: any) => {
          formData.append('file', file);
        });
        formData.append('data', JSON.stringify(this.newBanner.value))
        this.addBannerSub = this.bannerService.add(formData).subscribe({
          next: () => {
            this.bannerPhotoList = [];
            this.newBanner.reset();
            this.loadingBanner = !this.loadingBanner;
            this.msg.success('???????????? ?????????????? ????????????');
          },
          error: () => {
            this.loadingBanner = !this.loadingBanner;
            this.auth.removeToken();
            this.router.navigate(['/login'])
            this.msg.error('???? ?????????????? ?????????????? ????????????');
          }
        })
      } else {
        Object.values(this.newBanner.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
  }

  partnerSubmit(): void {
    if (this.partnerPhotoList.length === 0) {
      this.msg.error('???????????????? ????????, ???????????????? 1 ????????');
    } else {
      if (this.newPartner.valid) {
        this.loadingPartner = !this.loadingPartner;
        const formData = new FormData();
        this.partnerPhotoList.forEach((file: any) => {
          formData.append('file', file);
        });
        formData.append('data', JSON.stringify(this.newPartner.value))
        this.addPartnerSub = this.partnersService.add(formData).subscribe({
          next: () => {
            this.partnerPhotoList = [];
            this.newPartner.reset();
            this.loadingPartner = !this.loadingPartner;
            this.msg.success(' ?????????????? ????????????');
          },
          error: () => {
            this.loadingPartner = !this.loadingPartner;
            this.auth.removeToken();
            this.router.navigate(['/login'])
            this.msg.error('???? ?????????????? ??????????????????');
          }
        })
      } else {
        Object.values(this.newPartner.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.addBannerSub) this.addBannerSub.unsubscribe();
    if (this.addPartnerSub) this.addPartnerSub.unsubscribe();
  }
}
