import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/api/auth.service';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  defaultPage: boolean = true;

  constructor(private main: MainService, private auth: AuthService) { }

  loading(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }

  ngOnInit(): void {
    this.auth.isLoggedIn();
    this.main.isDefaultPage.subscribe(data => {
      this.defaultPage = data
    })
  }
}
