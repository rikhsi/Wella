import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private defaultPage = new BehaviorSubject<boolean>(true);
  isDefaultPage = this.defaultPage.asObservable();

  constructor() { }

  setPage(data: boolean): void {
    this.defaultPage.next(data);
  }
}
