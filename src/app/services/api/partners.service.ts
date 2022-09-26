import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from 'src/app/models/banner';
import { headers, url } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Advertisement[]>(url + 'getPartners');
  }

  add(formData: any) {
    return this.http.post<any>(url + 'addPartner', formData, { headers });
  }

  delete(id: number) {
    return this.http.delete(url + 'deletePartner/' + id, { headers });
  }
}
