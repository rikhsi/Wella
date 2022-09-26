import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  cards: About[] = [
    {
      img: '../../../../assets/img/about/confidence.svg',
      title: 'about.convenience.title',
      info: 'about.convenience.info'
    },
    {
      img: '../../../../assets/img/about/unique.svg',
      title: 'about.unique.title',
      info: 'about.unique.info'
    },
    {
      img: '../../../../assets/img/about/quality.svg',
      title: 'about.quality.title',
      info: 'about.quality.info'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
