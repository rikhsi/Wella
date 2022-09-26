import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  defaultPage: boolean = true;

  constructor(private main: MainService) { }

  loading(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, (2000));
  }

  ngOnInit(): void {
    this.loading();
    this.main.isDefaultPage.subscribe(data => {
      this.defaultPage = data
    })
  }
}
