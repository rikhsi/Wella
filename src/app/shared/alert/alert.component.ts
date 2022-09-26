import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  @Input() isVisible!: boolean;
  @Output() closeAlert = new EventEmitter();

  constructor() { }

  alertCancel(): void {
    this.isVisible = !this.isVisible;
    this.closeAlert.emit();
  }

  ngOnInit(): void {
  }

}
