import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleLangService {
  currentLang: boolean = true;

  constructor() { }

  private defaultMessage = new BehaviorSubject<boolean>(this.currentLang);
  message = this.defaultMessage.asObservable();

  changeMessage(data: boolean): void {
    this.defaultMessage.next(data);
  }

}
