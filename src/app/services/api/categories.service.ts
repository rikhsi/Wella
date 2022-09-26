import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { headers, url } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get<Filter[]>(url + 'getCategories');
  }

  getSingle(id: number) {
    return this.http.get<Filter>(url + 'getCategory/' + id);
  }

  addCategory(data: Filter) {
    return this.http.post<Filter>(url + 'addCategory', data, { headers });
  }

  deleteCategory(id: number) {
    return this.http.delete(url + 'deleteCategory/' + id, { headers });
  }
}
