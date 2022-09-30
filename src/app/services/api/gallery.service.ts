import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from 'src/app/models/banner';
import { headers, url } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Advertisement[]>(url + 'getGallery');
  }

  getTrue() {
    return this.http.get<Advertisement[]>(url + 'getGalleryTrue');
  }

  add(formData: FormData) {
    return this.http.post<any>(url + 'addGallery', formData, { headers });
  }

  delete(id: number) {
    return this.http.delete(url + 'deleteGallery/' + id, { headers });
  }

  update(activeBannersID: number[]) {
    return this.http.put(url + 'updateGallery', { galleries_id: activeBannersID }, { headers });
  }
}
