import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private main: MainService,) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.main.setPage(true);
    }, 10);
  }
}
