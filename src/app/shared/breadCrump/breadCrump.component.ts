import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { BreadCrumb } from '../../models/breadCrumb';

@Component({
  selector: 'app-breadCrump',
  templateUrl: './breadCrump.component.html',
  styleUrls: ['./breadCrump.component.less']
})
export class BreadCrumpComponent implements OnInit {

  cardId!: number;

  pages: BreadCrumb[] = [
    {
      id: 1,
      name: 'breadCrump.main',
      route: '/'
    }
  ];

  constructor(private router: Router, private activeRoute: ActivatedRoute, private navigation: NavigationService) { }

  routerNavigate(route: string, id: number): void {
    setTimeout(() => {
      if (id === 3) {
        this.router.navigate([route, this.cardId]);
      } else if (id === 1) {
        this.router.navigate([route])
        this.navigation.changeRoute(false);
      } else {
        this.router.navigate([route]);
        this.navigation.changeRoute(true);
      }
    }, 200);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => this.cardId = params['id']);
    this.navigation.message.subscribe(data => {
      data.forEach((page: BreadCrumb) => {
        this.pages.push(page);
      });
    });
  }
}
