import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { headers, url } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Product[]>(url + 'getDresses');
  }

  add(formData: FormData) {
    return this.http.post<any>(url + 'addDress', formData, { headers });
  }

  delete(id: number) {
    return this.http.delete(url + 'deleteDress/' + id, { headers });
  }

  updateBestseller(bestsellersID: number[]) {
    return this.http.put(url + 'updateDressBestSeller', { dresses_id: bestsellersID }, { headers });
  }

  updateCollection(collectionID: number[]) {
    return this.http.put(url + 'updateDressCollection', { dresses_id: collectionID }, { headers });
  }

  getCollection() {
    return this.http.get<Product[]>(url + 'getDressesCollection');
  }

  getBestseller() {
    return this.http.get<Product[]>(url + 'getDressesBestSeller');
  }

  getDress(id: number) {
    return this.http.get<Product>(url + 'getDress/' + id);
  }
}
