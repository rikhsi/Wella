import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  activePageId: number = 1

  private pageMessage = new BehaviorSubject<number>(this.activePageId);
  id = this.pageMessage.asObservable();

  constructor() { }

  changePage(id: number): void {
    this.pageMessage.next(id);
  }
}
