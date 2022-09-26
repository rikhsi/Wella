import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less']
})
export class IntroductionComponent implements OnInit {
  top!: number;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 1199) {
      this.top = 1600;
    } if (event.target.innerWidth < 1199) {
      this.top = 1200;
    } if (event.target.innerWidth < 767) {
      this.top = 800;
    } if (event.target.innerWidth < 575) {
      this.top = 1600;
    }
  }

  autoScroll(): void {
    window.scrollTo({ top: this.top, behavior: 'smooth' });
  }

  ngOnInit(): void {
    if (window.innerWidth > 1199) {
      this.top = 1600;
    } if (window.innerWidth < 1199) {
      this.top = 1200;
    } if (window.innerWidth < 767) {
      this.top = 800;
    } if (window.innerWidth < 575) {
      this.top = 1600;
    }
  }
}
