import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  isVisible: boolean = false;
  isAlertVisible: boolean = false;

  constructor(private router: Router) { }

  routerNavigate(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
      window.scrollTo({ top: 0 });
    }, 300);
  }

  showModal(): void {
    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, 300);
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible;
  }

  autoScroll(): void {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  }

  ngOnInit(): void {
  }

}
