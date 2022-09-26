import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadCrumb } from '../models/breadCrumb';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  page!: BreadCrumb[];

  private defaultMessage = new BehaviorSubject<BreadCrumb[]>(this.page);
  message = this.defaultMessage.asObservable();

  private homeMessage = new BehaviorSubject<boolean>(false);
  isHomePage = this.homeMessage.asObservable();

  constructor() { }

  changeMessage(data: BreadCrumb[]): void {
    this.defaultMessage.next(data);
  }

  changeRoute(data: boolean): void {
    this.homeMessage.next(data);
  }
}
