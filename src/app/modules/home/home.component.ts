import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HandleLangService } from 'src/app/services/handle-lang.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private main: MainService, private langService: HandleLangService, private title: Title) { }

  ngOnInit(): void {
    this.langService.message.subscribe(data => {
      if(data){
        this.title.setTitle('Wella Wedding - Свадебный салон в Чирчике. Онлайн примерка свадебных платеьв. Доставка по Узбекистану. Платья из Италии, Франции, Испании')
      } else{
        this.title.setTitle("Wella Wedding - Chirchiqda joylashgan to`y saloni. To`y liboslarini onlayn band qilish. O'zbekiston bo'ylab yetkazib berish. Italiya, Frantsiya, Ispaniyadan liboslar")
      }
    })
    setTimeout(() => {
      this.main.setPage(true);
    }, 10);
  }
}
