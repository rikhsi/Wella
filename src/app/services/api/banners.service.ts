import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from 'src/app/models/banner';
import { headers, url } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class BannersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Advertisement[]>(url + 'getBanners');
  }

  getTrue() {
    return this.http.get<Advertisement[]>(url + 'getBannersTrue');
  }

  add(formData: FormData) {
    return this.http.post<any>(url + 'addBanner', formData, { headers });
  }

  delete(id: number) {
    return this.http.delete(url + 'deleteBanner/' + id, { headers });
  }

  update(activeBannersID: number[]) {
    return this.http.put(url + 'updateBanner', { banners_id: activeBannersID }, { headers });
  }
}
